import { React, useEffect, useState } from "react";
import EKGFindings from "./ekgfindings/EKGFindings";
import PatientHistory from "./patienthistory/PatientHistory";
import HsTnlResults from "./hstnlresults/HsTnlResults";
import Calculatescore from "./calculateriskscore/CalculateScore";
import { Grid } from "../../../shared/material/mui";
import { AmiInputStyles } from "./AmiInputStyles";

const AmiInput = (props) => {
  const [data, setData] = useState({});


  const fetchRiskScoreContributors = (config) => {
    if (props.localMode) {
      riskScoreService.getRiskScoreContributorsLocal(config).then(
        (response) => {
          setRiskScoreContributors(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
        }
      );
    } else {
      riskScoreService.getRiskScoreContributors(config).then(
        (response) => {
          setRiskScoreContributors(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
        }
      );
    }
  };

  const classes = AmiInputStyles();
  return (
    <div>
      <Grid
        container
        spacing={1}
        className={`${classes.root} ${classes.holder}`}
      >
        <Grid item md={6} xs={12}>
          <PatientHistory></PatientHistory>
        </Grid>
        <Grid container item md={6} xs={12}>
          <Grid md={12} xs={12} sm={6}>
            <EKGFindings></EKGFindings>
          </Grid>
          <Grid md={12} xs={12} sm={6}>
            <HsTnlResults></HsTnlResults>
          </Grid>
          <Grid md={12} xs={12} sm={6}>
            <Calculatescore></Calculatescore>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AmiInput;
