import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { PatientHistoryStyles } from "./PatientHistoryStyles";
import TextField from "@mui/material/TextField";
import "../styles.css";

const Race = [
  {
    value: "3",
    label: "Asian",
  },
  {
    value: "4",
    label: "South",
  },
];

const PatientHistory = () => {
  const classes = PatientHistoryStyles();
  return (
    // <Grid
    //   md={12}
    //   xs={12}
    //   item
    //   container
    //   spacing={4}
    //   className={`${classes.root} ${classes.holder}`}
    // >
    <Grid item container md={12} xs={12} className={classes.patientHistory}>
      <form className={classes.firstform}>
        <Typography className={classes.headerText}>Patient History</Typography>

        <Typography className={classes.headerTextThree}>
          Demographics Information pulled from EHR
        </Typography>

        <FormControl variant="standard" style={{ backgroundColor: "#fff" }}>
          <InputLabel
            className={classes.patientagelabel}
            shrink
            htmlFor="bootstrap-input"
          >
            Patient Age*
          </InputLabel>
          <br></br>

          <input
            type="email"
            class="form-control"
            className={classes.patientage}
          ></input>

          {/* {patientInfo.value.patientDetails.age} */}
        </FormControl>

        <TextField
          className={classes.textFieldColor}
          id="Race"
          select
          label="Gender"
          variant="standard"
          // value={race}
          // onChange={handleRace}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          <MenuItem value="Asian">Male</MenuItem>
        </TextField>

        <TextField
          className={classes.textFieldColor}
          id="Race"
          select
          label="Race"
          variant="standard"
          // value={race}
          // onChange={handleRace}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          <MenuItem value="Asian">Asian</MenuItem>
        </TextField>

        <TextField
          className={classes.textFieldColor}
          id="riskFactors"
          select
          label="Presenting Symptoms"
          variant="standard"
          // value={riskFactors}
          // onChange={handleRiskFactors}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          <MenuItem value="prior AMI">Chest pain</MenuItem>
        </TextField>

        <TextField
          className={classes.textFieldColor}
          id="time"
          select
          label="Time since symptom onset"
          variant="standard"
          // value={symptomOnset}
          // onChange={handleSymptomOnset}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          {/* {time.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
        </TextField>

        <TextField
          className={classes.textFieldColor}
          id="riskFactors"
          select
          label="Risk Factors"
          variant="standard"
          // value={riskFactors}
          // onChange={handleRiskFactors}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          <MenuItem value="prior AMI">Prior AMI</MenuItem>
        </TextField>
      </form>
      <br />
    </Grid>
    // </Grid>
  );
};

export default PatientHistory;
