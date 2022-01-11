import { React, useEffect, useState } from "react";
import EKGFindings from "./ekgfindings/EKGFindings";
import PatientHistory from "./patienthistory/PatientHistory";
import HsTnlResults from "./hstnlresults/HsTnlResults";
import Calculatescore from "./calculateriskscore/CalculateScore";
import { Grid } from "../../../shared/material/mui";
import { AmiInputStyles } from "./AmiInputStyles";
import { patientInfoService } from "../../../services/patientInfo-service";
import CircularIndeterminate from "../../../shared/preloder/Preloder";

const AmiInput = (props) => {
  const classes = AmiInputStyles();
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const configData = {
    MRN: "1",
    EncounterNumber: "1",
  };

  useEffect(() => {
    getPatientInfo(configData);
  }, []);

  const getPatientInfo = (config) => {
    if (props.localMode) {
      patientInfoService.getPatientInfoLocal(config).then(
        (response) => {
          setData(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
        }
      );
    } else {
      patientInfoService.getRiskScoreContributors(config).then(
        (response) => {
          setData(response.data);
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
  } else{
    return (
      <div>
        <Grid
          container
          spacing={1}
          className={`${classes.root} ${classes.holder}`}
        >
          <Grid item md={6} xs={12}>
            <PatientHistory result={data.result}></PatientHistory>
          </Grid>
          <Grid container item md={6} xs={12}>
            <Grid item md={12} xs={12} sm={6}>
              <EKGFindings result={data.result}></EKGFindings>
            </Grid>
            <Grid item md={12} xs={12} sm={6}>
              <HsTnlResults result={data.result}></HsTnlResults>
            </Grid>
            <Grid item md={12} xs={12} sm={6}>
              <Calculatescore></Calculatescore>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

 
};

export default AmiInput;
