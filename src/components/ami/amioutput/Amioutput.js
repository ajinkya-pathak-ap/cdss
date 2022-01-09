import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { riskScoreService } from "../../../services/riskScore-service";
import CircularIndeterminate from "../../../shared/preloder/Preloder";
import { amiOutputStyles } from "./AmioutputStyles";
import Guidance from "./guidance/Guidance";
import Riskscore from "./riskscore/Riskscore";
import RiskscoreContributors from "./riskcontributors/RiskscoreContributors";
import { BootstrapButton } from "./AmioutputStyles";

const configData = {
  MRN: "1",
  EncounterNumber: "1",
};

export default function AMIOutput(props) {
  const classes = amiOutputStyles();

  const [riskScore, setRiskScore] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchRiskScore(configData);
  }, []);

  const fetchRiskScore = (config) => {
    if (props.localMode) {
      riskScoreService.getRiskScoreLocal(config).then(
        (response) => {
          setRiskScore(response.data);
          setIsFetching(false);
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
        },
        (error) => {
          return;
        }
      );
    }
  };

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid container spacing={3} className={classes.mainContainer}>
        <Riskscore result={riskScore.result}></Riskscore>
        <RiskscoreContributors
          result={riskScore.result}
        ></RiskscoreContributors>
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
