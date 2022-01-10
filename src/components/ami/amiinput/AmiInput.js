import React from "react";
import EKGFindings from "./ekgfindings/EKGFindings";
import PatientHistory from "./patienthistory/PatientHistory";
import HsTnlResults from "./hstnlresults/HsTnlResults";
import { Grid } from "../../../shared/material/mui";
import AmiInputStyles from "./AmiInputStyles";

export default function AMiInput(props) {
  const classes = AmiInputStyles();

  return (
    <div>
      {/* <EKGFindings></EKGFindings>
      <PatientHistory></PatientHistory>
      <HsTnlResults></HsTnlResults> */}
      <Grid container spacing={3} className={classes.mainContainer}>
        <PatientHistory></PatientHistory>
        <EKGFindings></EKGFindings>
        <HsTnlResults></HsTnlResults>
      </Grid>
    </div>
  );
}
