import React, { useState, useEffect } from "react";
import { Grid } from "../../../shared/material/mui";
import { riskScoreService } from "../../../services/riskScore-service";
import CircularIndeterminate from "../../../shared/preloder/Preloder";
import { amiOutputStyles } from "./AmioutputStyles";
import Guidance from "./guidance/Guidance";
import Riskscore from "./riskscore/Riskscore";
import RiskscoreContributors from "./riskcontributors/RiskscoreContributors";
import { Acknowledge } from "./acknowledge/Acknowledge";

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
          console.log("error", error);
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
        <Guidance result={riskScore.result}></Guidance>
        <Acknowledge></Acknowledge>
      </Grid>
    );
  }
}
