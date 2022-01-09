import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { riskScoreService } from "../../services/riskScore-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { amiOutputStyles } from "./CustomStyles";
import { Guidance } from "./guidance/Guidance";
import { Riskscore } from "./riskscore/Riskscore";
import { RiskscoreContributors } from "./riskcontributors/RiskscoreContributors";

const BootstrapButton = styled(Button)((props) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "14px",
  color: "#fff",
  padding: "6px 32px",
  lineHeight: 1.9,
  backgroundColor: "#414bb2",
  fontFamily: ["Roboto"].join(","),
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
  [props.theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

//Close and Aknowledge button styles//
const configData = {
  MRN: "1",
  EncounterNumber: "1",
};

export default function AMIOutput(props) {
  const classes = amiOutputStyles();

  const [riskScore, setRiskScore] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const [details, setDetails] = useState({
    text_1: "",
    text_2: "",
  });

  const [positiveCont, setPositiveCont] = useState([]);
  const [negativeCont, setNegativeCont] = useState([]);

  const [guidance, setGuidance] = useState({
    text_1: "",
    text_2: "",
  });

  useEffect(() => {
    fetchRiskScore(configData);
  }, []);

  const fetchRiskScore = (config) => {
    if (props.localMode) {
      riskScoreService.getRiskScoreLocal(config).then(
        (response) => {
          setRiskScore(response.data);
          setIsFetching(false);
          getRiskScoreDetails(response.data.result.riskScoreDetails);
          getGuidance(response.data.result.guidance);
          riskScoreContributors(response.data.result);
        },
        (error) => {
          return;
        }
      );
    } else {
      riskScoreService.getRiskScore(config).then(
        (response) => {
          setRiskScore(response.data);
          setIsFetching(false);
          getRiskScoreDetails(response.data.result.riskScoreDetails);
          getGuidance(response.data.result.guidance);
        },
        (error) => {
          return;
        }
      );
    }
  };

  const getRiskScoreDetails = (_string) => {
    let strArr = _string.split("$");
    setDetails({ ...details, text_1: strArr[0], text_2: strArr[1] });
  };

  const getGuidance = (_string) => {
    let strArr = _string.split("$");
    setGuidance({ ...guidance, text_1: strArr[0], text_2: strArr[1] });
  };

  const riskScoreContributors = (_obj) => {
    setPositiveCont(_obj.positiveContributors.split(","));
    setNegativeCont(_obj.negativeContributors.split(","));
  };

  const riskScoreRange = () => {
    let probRange = riskScore.result.probabilityRange;
    probRange = probRange.replace("(", "");
    probRange = probRange.replace(")", "");
    probRange = probRange.replace(",", " -");
    console.log(probRange);
    return probRange;
  };
  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid container spacing={3} className={classes.mainContainer}>
        <Riskscore></Riskscore>
        <RiskscoreContributors></RiskscoreContributors>
        <Guidance></Guidance>
        <Grid item xs={12} container className={classes.alignRight}>
          <Stack spacing={2} direction="row" container>
            <BootstrapButton
              variant="contained"
              className={`${classes.buttonColor} ${classes.acknowledgeBtn_1}`}
            >
              <Link className={classes.buttonColor} to="">
                <span className="m-1">
                  Acknowledge(Document Risk Contributors)
                </span>
              </Link>
            </BootstrapButton>
            <BootstrapButton
              variant="contained"
              className={`${classes.buttonColor} ${classes.acknowledgeBtn_2}`}
            >
              <Link className={classes.buttonColor} to="">
                <span className="m-1">Acknowledge</span>
              </Link>
            </BootstrapButton>
            <BootstrapButton
              variant="contained"
              className={classes.buttonColor1}
            >
              <Link className={classes.buttonColor1} to="/amioutput">
                <span className="m-1">Close</span>
              </Link>
            </BootstrapButton>
          </Stack>
        </Grid>
      </Grid>
    );
  }
}
