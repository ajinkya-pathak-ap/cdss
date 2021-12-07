import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
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
  const pageValues = {
    age: 0,
    gender: "",
    race: "",
    presentingSymptoms: "",
    symptomOnset: "",
    riskFactors: "",
    ekgFindingNoDeviation: true,
    ekgFindingstDeviation: true,
    firstDraw: {
      amount: 1,
      time: "",
    },
    secondDraw: {
      amount: 1,
      time: "",
    },
    thirdDraw: {
      amount: 1,
      time: "",
    },
  };

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

  const resetFields = () => {};

  return (
    <Grid
      md={12}
      xs={12}
      item
      container
      spacing={4}
      className={classes.root}
      style={{ backgroundColor: "#6D7F9B", padding: "30px", marginTop: "40px" }}
    >
      <Grid
        item
        container
        md={6}
        xs={12}
        style={{ backgroundColor: "#050038" }}
      >
        <form className={classes.firstform}>
          <h3 style={{ textAlign: "left", color: "white" }}>Patient History</h3>
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
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
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
          >
            {riskFactor.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </form>
      </Grid>

      <Grid
        item
        container
        spacing={4}
        md={6}
        xs={12}
        style={{ backgroundColor: "#6D7F9B" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{ backgroundColor: "#050038", paddingLeft: "16px" }}
        >
          <FormGroup className={classes.formgrop}>
            <h3 style={{ textAlign: "left", color: "white" }}>
              EKG Findings(Select One)
            </h3>

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
            style={{ paddingLeft: "16px", marginTop: "14px" }}
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
                {/* <h3>HsTnl Results</h3>
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
                /> */}
                <form className="ui form">
                  <tbody className={classes.formgrop}>
                    <tr>
                      <th> </th>
                      <th>HsTnl Results</th>
                      <th>Draw </th>
                    </tr>
                    <tr>
                      <td className="ui header">Name</td>

                      <td>
                        <input type="text" placeholder="Name" />
                      </td>
                      <td className="ui header">Name</td>

                      <td>
                        <input type="text" placeholder="Name" />
                      </td>
                    </tr>
                  </tbody>
                </form>
              </Box>
            </Grid>

            {/* <Grid item xs={6}>
              <h3>Draw Time</h3>
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
            </Grid> */}
          </Grid>
        </form>
        {/* ***************** end of second Box *********************** */}
        {/* *****************  start third Box *********************** */}
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>1</Paper> */}
          <Stack xs={12} direction="row" justifycontent="center" spacing={2}>
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
              onClick={resetFields}
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
