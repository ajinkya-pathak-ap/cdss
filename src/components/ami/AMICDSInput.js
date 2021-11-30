import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
// import CustomizedInputs from "./form";
import Button from "@mui/material/Button";

// import BasicTextFields from "../AMI/form";
import { blue, red } from "@material-ui/core/colors";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  firstform: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1),
    },
  },
  secondform: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1),
    },
  },

  formgrop: {
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignItems: "flex-start",
  },

  buttonColor: {
    backgroundColor: "#414bb2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },
  textFieldColor: {
    backgroundColor: "white",
    textAlign: "right",
  },
}));

const Gender = [
  {
    value: "1",
    label: "Male",
  },
  {
    value: "2",
    label: "Female",
  },
];

const riskFactor = [
  {
    value: "1",
    label: "prior AMI",
  },
  {
    value: "2",
    label: "prior AMI2l",
  },
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

const symptoms = [
  {
    value: "5",
    label: "Left Hand Pain",
  },
  {
    value: "6",
    label: "Chest Pain",
  },
];

const time = [
  {
    value: "7",
    label: "1 Hrs",
  },
  {
    value: "8",
    label: "2 Hrs",
  },
];

export default function AMICSInput() {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();
  const [textValue, setTextValue] = useState();

  const onTextChange = () => setTextValue();

  /******methods of checkbox********/
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [age, setAge] = React.useState("");

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      md={12}
      xs={12}
      item
      container
      spacing={4}
      className={classes.root}
      style={{ backgroundColor: "#6D7F9B", padding: "30px" }}
    >
      <Grid
        item
        container
        md={6}
        xs={12}
        style={{ backgroundColor: "#050038" }}
      >
        <form className={classes.firstform}>
          <h5 style={{ textAlign: "left", color: "white" }}>Patient History</h5>
          <h5 style={{ textAlign: "left", color: "white" }}>
            Demographics Information pulled from EHR
          </h5>

          <TextField
            className={classes.textFieldColor}
            id="age"
            label="Age"
            variant="standard"
            type="number"
          />
          <TextField
            className={classes.textFieldColor}
            id="gender"
            variant="standard"
            select
            label="Gender"
            // onChange={handleChange1}
          >
            {Gender.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="Race"
            select
            label="Race"
            variant="standard"

            // onChange={handleChange1}
          >
            {Race.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="symptoms"
            select
            label="Presenting Symptoms"
            variant="standard"

            // onChange={handleChange1}
          >
            {symptoms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="time"
            select
            label="Time since symptom onset"
            variant="standard"

            // onChange={handleChange1}
          >
            {time.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="risk factors"
            select
            label="Risk Factors"
            variant="standard"

            // onChange={handleChange1}
          >
            {riskFactor.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* </Box> */}
          {/* </Grid> */}
          {/* </Grid> */}
        </form>
        {/* </Grid> */}
      </Grid>

      <Grid
        item
        container
        spacing={4}
        md={6}
        xs={12}
        style={{ backgroundColor: "#6D7F9B" }}
      >
        {/* *****************  first Box *********************** */}
        <Grid
          item
          xs={12}
          md={12}
          style={{ backgroundColor: "#050038", paddingLeft: "16px" }}
        >
          <FormGroup className={classes.formgrop}>
            <h5 style={{ textAlign: "left", color: "white" }}>
              EKG Findings(Select One)
            </h5>

            <FormControlLabel
              control={
                <Checkbox
                  {...label}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label="No ST deviation, but LBBB, LVH, repolarization changes "
            />
            <FormControlLabel
              control={
                <Checkbox
                  {...label}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label="ST deviation, but LBBB, LVH, repolarization changes"
            />
          </FormGroup>
        </Grid>
        {/* ***************** end of first Box *********************** */}

        {/* ***************** start of second Box *********************** */}
        <form className={classes.secondform}>
          <Grid
            container
            className={classes.formgrop}
            style={{ paddingLeft: "16px" }}
          >
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <h4>HsTnl Results</h4>

                <TextField
                  className={classes.textFieldColor}
                  id="25 ng/L"
                  label="25 ng/L"
                  variant="outlined"
                />

                <TextField
                  className={classes.textFieldColor}
                  id="35 ng/L"
                  label="35 ng/L"
                  variant="outlined"
                />

                <TextField
                  className={classes.textFieldColor}
                  id=" ng/L"
                  label="ng/L"
                  variant="outlined"
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <h4>Draw Time</h4>
              <TextField
                className={classes.textFieldColor}
                id="date1"
                label="10/26/2021,20:40"
                variant="outlined"
              />

              <TextField
                className={classes.textFieldColor}
                id="date2"
                label="10/26/2021,23:10"
                variant="outlined"
              />
              <TextField
                className={classes.textFieldColor}
                id="date3"
                label="mm:hh:yyyy"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
        {/* ***************** end of second Box *********************** */}

        {/* ***************** end of second Box *********************** */}

        {/* *****************  start third Box *********************** */}
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>1</Paper> */}
          <Stack xs={12} direction="row" justifyContent="center" spacing={2}>
            <Button
              className={classes.buttonColor}
              variant="contained"
              style={{ textTransform: "none", backgroundColor: "#414BB2" }}
            >
              Exit
            </Button>
            <Button
              className={classes.buttonColor}
              variant="contained"
              style={{ textTransform: "none", backgroundColor: "#414BB2" }}
            >
              Reset
            </Button>
            <Button
              className={classes.buttonColor}
              style={{ textTransform: "none", backgroundColor: "#414BB2" }}
              variant="contained"
              href="#contained-buttons"
            >
              Calculate Risk Score
            </Button>
          </Stack>
        </Grid>
        {/* ***************** end of third Box *********************** */}
      </Grid>
    </Grid>
  );
}
