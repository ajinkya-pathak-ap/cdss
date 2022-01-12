import { React, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
  TextField,
} from "../../../../shared/material/mui";
import { FormControl, InputLabel } from "@material-ui/core";
import { PatientHistoryStyles } from "./PatientHistoryStyles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import { mlInputUtils } from "../AmiInutUtils";
import "./styles.css";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const menuProps = () => {
  const ITEM_HEIGHT = 48,
    ITEM_PADDING_TOP = 8;

  return {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
};

const PatientHistory = (props) => {
  const classes = PatientHistoryStyles();
  const { patientDetails } = props.result;
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [race1, setRace1] = useState("");

  useEffect(() => {
    mapValues();
  }, []);

  const [presentingSysmptoms, setPresentingSysmptoms] = useState([]);
  const [symptomOnset, setSymptomOnset] = useState([]);
  const [riskFsctors, setRiskFactors] = useState([]);

  const theme = useTheme();
  const handlePresentingSysmptoms = (event) => {
    const {
      target: { value },
    } = event;
    setPresentingSysmptoms(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSymptomOnset = (event) => {
    const {
      target: { value },
    } = event;
    setSymptomOnset(typeof value === "string" ? value.split(",") : value);
  };

  const handleRiskFsctors = (event) => {
    const {
      target: { value },
    } = event;
    setRiskFactors(typeof value === "string" ? value.split(",") : value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const genderValue = () => {
    if (gender) {
      return <MenuItem value={gender}>{gender}</MenuItem>;
    } else {
    }
  };

  const handleRace = (e) => {
    setRace(e.target.value);
  };

  const mapValues = () => {
    if (patientDetails.gender.length > 0) {
      setGender(patientDetails.gender[0].description);
    }
    patientDetails.race.length > 0
      ? setRace(patientDetails.race[0].description)
      : setRace("");
  };

  const resetFields = () => {
    setPresentingSysmptoms([]);
    setSymptomOnset([]);
    setRiskFactors([]);
  };

  return (
    <>
      <Grid item container md={12} xs={12} className={classes.patientHistory}>
        <form className={classes.firstform}>
          <Typography className={classes.headerText}>
            Patient History
          </Typography>

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
              disabled
              type="email"
              className={`form-control ${classes.patientage}`}
              value={patientDetails.age ? patientDetails.age : "NA"}
            ></input>
          </FormControl>

          {/* <TextField
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
            {genderValue()}
          </TextField> */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="gender" className={classes.multiSelectDdLabel}>
              Gender
            </InputLabel>
            <Select
              className={classes.textFieldColor}
              labelId="gender"
              id="gender"
              label="Gender"
              // multiple
              variant="standard"
              value={gender}
              onChange={handleGender}
              inputProps={{
                className: classes.fontTypePresentingSymptoms,
              }}
              input={<OutlinedInput label="Name" />}
              MenuProps={menuProps()}
            >
              {/* {patientDetails.race.map((v) => ( */}
              <MenuItem style={getStyles({ gender }, gender, theme)}>
                {genderValue()}
              </MenuItem>
              {/* ))} */}
            </Select>
          </FormControl>

          {/* <TextField
            className={classes.textFieldColor}
            id="Race"
            select
            label="Race"
            variant="standard"
            value={race}
            onChange={handleRace}
            inputProps={{
              className: classes.fontTypeOne,
            }}
          >
            {patientDetails.race.map((v) => (
              <MenuItem key={v} value={v.description}>
                {v.description}
              </MenuItem>
            ))}
          </TextField> */}

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="Race" className={classes.multiSelectDdLabel}>
              Race
            </InputLabel>
            <Select
              className={classes.textFieldColor}
              labelId="Race"
              id="Race"
              label="Race"
              // multiple
              variant="standard"
              value={race}
              onChange={handleRace}
              inputProps={{
                className: classes.fontTypePresentingSymptoms,
              }}
              input={<OutlinedInput label="Name" />}
              MenuProps={menuProps()}
            >
              {patientDetails.race.map((v) => (
                <MenuItem
                  key={v}
                  value={v.description}
                  style={getStyles(v.description, race, theme)}
                >
                  {v.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
              id="label-presenting-symptoms"
              className={classes.multiSelectDdLabel}
            >
              Presenting Symptoms
            </InputLabel>
            <Select
              className={classes.textFieldColor}
              labelId="label-presenting-symptoms"
              id="presenting-symptoms"
              label="Presenting Symptoms"
              multiple
              variant="standard"
              value={presentingSysmptoms}
              onChange={handlePresentingSysmptoms}
              inputProps={{
                className: classes.fontTypePresentingSymptoms,
              }}
              input={<OutlinedInput label="Name" />}
              MenuProps={menuProps()}
            >
              {patientDetails.symptoms.map((symptom) => (
                <MenuItem
                  key={symptom}
                  value={symptom}
                  style={getStyles(symptom, presentingSysmptoms, theme)}
                >
                  {symptom}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
              id="label-symptom-onset"
              className={classes.multiSelectDdLabel}
            >
              Time since symptom onset
            </InputLabel>
            <Select
              className={classes.textFieldColor}
              labelId="label-symptom-onset"
              id="symptom-onset"
              label="Time since symptom onset"
              multiple
              variant="standard"
              value={symptomOnset}
              onChange={handleSymptomOnset}
              inputProps={{
                className: classes.fontTypePresentingSymptoms,
              }}
              input={<OutlinedInput label="Name" />}
              MenuProps={menuProps()}
            >
              {patientDetails.symptomOnset.map((onset) => (
                <MenuItem
                  key={onset}
                  value={onset}
                  style={getStyles(onset, symptomOnset, theme)}
                >
                  {onset}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
              id="label-risk-factors"
              className={classes.multiSelectDdLabel}
            >
              Risk Factors
            </InputLabel>
            <Select
              className={classes.textFieldColor}
              labelId="label-risk-factors"
              id="risk-factors"
              label="Risk Factors"
              multiple
              variant="standard"
              value={riskFsctors}
              onChange={handleRiskFsctors}
              inputProps={{
                className: classes.fontTypePresentingSymptoms,
              }}
              input={<OutlinedInput label="Name" />}
              MenuProps={menuProps()}
            >
              {patientDetails.riskFactors.map((rFactor) => (
                <MenuItem
                  key={rFactor}
                  value={rFactor}
                  style={getStyles(rFactor, riskFsctors, theme)}
                >
                  {rFactor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <button onClick={resetFields}>Reset</button> */}
        </form>
        <br />
      </Grid>
    </>
  );
};

export default PatientHistory;
