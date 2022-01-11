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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PatientHistory = (props) => {
  const classes = PatientHistoryStyles();
  const { patientDetails } = props.result;
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [presymptom, setPresymptom] = useState("");

  useEffect(() => {
    mapValues();
  }, []);

  const [personName, setPersonName] = useState([]);

  const theme = useTheme();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
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

  const handlePreSymptoms = (e) => {
    setPresymptom(e.target.value);
  };

  const mapValues = () => {
    if (patientDetails.gender.length > 0) {
      setGender(patientDetails.gender[0].description);
    }
    patientDetails.race.length > 0
      ? setRace(patientDetails.race[0].description)
      : setRace("");
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
            className={`form-control ${classes.patientage}`}
            value={patientDetails.age ? patientDetails.age : "NA"}
          ></input>
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
          {genderValue()}
        </TextField>

        <TextField
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
            <MenuItem value={v.description}>{v.description}</MenuItem>
          ))}
        </TextField>

        <TextField
          className={classes.textFieldColor}
          id="presenting-symptoms"
          select
          label="Race"
          variant="standard"
          value={race}
          onChange={handlePreSymptoms}
          inputProps={{
            className: classes.fontTypeOne,
          }}
        >
          {patientDetails.race.map((v) => (
            <MenuItem value={v.description}>{v.description}</MenuItem>
          ))}
        </TextField>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="label-presenting-symptoms">Name</InputLabel>
          <Select
            className={classes.textFieldColor}
            labelId="label-presenting-symptoms"
            id="presenting-symptoms"
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

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="label-symptom-onset">
            Time since symptom onset
          </InputLabel>
          <Select
            className={classes.textFieldColor}
            labelId="label-symptom-onset"
            id="symptom-onset"
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
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="label-risk-factors">Risk Factors</InputLabel>
          <Select
            className={classes.textFieldColor}
            labelId="label-risk-factors"
            id="risk-factors"
            label="Risk Factors"
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
