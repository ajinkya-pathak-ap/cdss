import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { PatientHistoryStyles } from "./PatientHistoryStyles";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import "../styles.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PatientHistory = () => {
  const classes = PatientHistoryStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [gender, setGender] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  return (
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
          id="gender"
          select
          label="Gender"
          variant="standard"
          value={gender}
          onChange={handleGender}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">FeMale</MenuItem>
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
          <MenuItem value="Asian2">Asian2</MenuItem>
        </TextField>

        {/* <TextField
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
        </TextField> */}

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            className={classes.textFieldColor}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            label="Presenting Symptoms"
            multiple
            variant="standard"
            value={personName}
            onChange={handleChange}
            inputProps={{
              className: classes.fontTypePresentingSymptoms,
            }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <TextField
          className={classes.textFieldColor}
          id="time"
          select
          label="Time since symptom onset"
          variant="standard"
          value={symptomOnset}
          onChange={handleSymptomOnset}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          {time.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField> */}

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo2">Time since symptom onset</InputLabel>
          <Select
            className={classes.textFieldColor}
            labelId="demo-multiple-name-label"
            id="demo2"
            label="Time since symptom onset"
            multiple
            variant="standard"
            value={personName}
            onChange={handleChange}
            inputProps={{
              className: classes.fontTypePresentingSymptoms,
            }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <TextField
          className={classes.textFieldColor}
          id="riskFactors"
          select
          label="Risk Factors"
          variant="standard"
          value={riskFactors}
          onChange={handleRiskFactors}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          <MenuItem value="prior AMI">Prior AMI</MenuItem>
        </TextField> */}

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo3">Risk Factors</InputLabel>
          <Select
            className={classes.textFieldColor}
            labelId="demo-multiple-name-label"
            id="demo3"
            label="Time since symptom onset"
            multiple
            variant="standard"
            value={personName}
            onChange={handleChange}
            inputProps={{
              className: classes.fontTypePresentingSymptoms,
            }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name2) => (
              <MenuItem
                key={name2}
                value={name2}
                style={getStyles(name2, personName, theme)}
              >
                {name2}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
      <br />
    </Grid>
    // </Grid>
  );
};

export default PatientHistory;
