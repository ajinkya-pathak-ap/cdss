import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import { riskScoreService } from "../../services/riskScore-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { RiskContributors } from "./RiskContributorsStyles";

//Close and Aknowledge button styles//
const configData = {
  MRN: "1",
  EncounterNumber: "1",
};

export default function RiskContributors(props) {
  const classes = RiskContributorsStyles();

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
  }, [0]);

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
        {/* *****************Second container***************** */}
        <Grid container item xs={12}>
          <Grid item xs={7} lg={8} className={classes.gridcontainer2}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography className={`${classes.headerText}`}>
                  Risk Score Contributors
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  Factors that increase the 30-day MACE risk
                  <ol>
                    {positiveCont.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ol>
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  Factors that decrease the 30-day MACE risk
                  <ol>
                    {negativeCont.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ol>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            item
            xs={5}
            lg={4}
            className={`${classes.gridcontainer2} ${classes.moreInfo}`}
            direction="column"
            alignItems="center"
          >
            <Stack spacing={4} direction="row">
              <BootstrapButton
                variant="contained"
                className={classes.buttonColor}
                style={{
                  marginBottom: "40px",
                  // marginRight: "20px",
                }}
              >
                <Link
                  className={`${classes.buttonColor} ${classes.moreInfoBtn_1}`}
                  to="/contributors"
                >
                  <span className="m-2">More Info</span>
                </Link>
                <Link
                  className={`${classes.buttonColor} ${classes.moreInfoBtn_2}`}
                  to="/contributors"
                >
                  <span className="m-2">More</span>
                </Link>
              </BootstrapButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
