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
import { FormControl, Select, Typography } from "@material-ui/core";
import { alpha, styled } from "@material-ui/core/styles";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    fontSize: 14,
    width: "70%",

    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "70%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  firstform: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
      float: "left",
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
    alignitems: "flex-start",
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
    height: " 2.65em",
    color: "#000",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    color: "#fff",
    textAlign: "left",
  },
  headerTextThree: {
    fontSize: "14px",
    color: "#fff",
    textAlign: "left",
    marginLeft: "8px",
  },
  nonDisable: {
    color: "rgba(0, 0, 0, 0.38) !important",
  },
  resize: {
    fontSize: 11,
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
  const classes = useStyles();

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
    fontSize: "10px",
  };

  const resetFields = () => {};

  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Male");
  const [race, setRace] = useState("Asian");
  const [presentingSymptoms, setPresentingSymptoms] = useState(
    "Left Hand Pain"
  );
  const [symptomOnset, setSymptomOnset] = useState("1 Hrs");
  const [riskFactors, setrRiskFactors] = useState("prior AMI");

  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleGender(e) {
    setGender(e.target.value);
  }
  function handleRace(e) {
    setRace(e.target.value);
  }

  function handlePresentingSymptoms(e) {
    setPresentingSymptoms(e.target.value);
  }
  function handleSymptomOnset(e) {
    setSymptomOnset(e.target.value);
  }
  function handleRiskFactors(e) {
    setrRiskFactors(e.target.value);
  }

  return (
    <Grid
      md={12}
      xs={12}
      item
      container
      spacing={4}
      className={`${classes.root} ${classes.holder}`}
      style={{ backgroundColor: "#6D7F9B", padding: "30px", marginTop: "30px" }}
    >
      <Grid
        item
        container
        md={6}
        xs={12}
        style={{ backgroundColor: "#050038" }}
      >
        <form className={classes.firstform}>
          <Typography className={classes.headerText}>
            Patient History
          </Typography>

          <Typography className={classes.headerTextThree}>
            Demographics Information pulled from EHR
          </Typography>

          <TextField
            className={classes.textFieldColor}
            id="age"
            // select
            label="Patient Age*"
            variant="outlined"
            value={age}
            onChange={handleAge}
            InputProps={{
              inputProps: {
                style: { marginTop: "4px" },
              },
            }}
          >
            <MenuItem value="25">25</MenuItem>
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="gender"
            select
            label="Gender"
            variant="standard"
            value={gender}
            onChange={handleGender}
          >
            {/* {Gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
            <MenuItem value="Male">Male</MenuItem>
          </TextField>
          <TextField
            className={classes.textFieldColor}
            id="Race"
            select
            label="Race"
            variant="standard"
            value={race}
            onChange={handleRace}
          >
            {/* {Race.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
            <MenuItem value="Asian">Asian</MenuItem>
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="symptoms"
            select
            label="Presenting Symptoms"
            variant="standard"
            value={presentingSymptoms}
            onChange={handlePresentingSymptoms}
          >
            {/* {symptoms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
            <MenuItem value="Left Hand Pain">Left Hand Pain</MenuItem>
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="time"
            select
            label="Time since symptom onset"
            variant="standard"
            value={symptomOnset}
            onChange={handleSymptomOnset}
          >
            {time.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            {/* <MenuItem value="Asian">Asian</MenuItem> */}
          </TextField>

          <TextField
            className={classes.textFieldColor}
            id="riskFactors"
            select
            label="Risk Factors"
            variant="standard"
            value={riskFactors}
            onChange={handleRiskFactors}
          >
            {/* {riskFactor.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
            <MenuItem value="prior AMI">Prior AMI</MenuItem>
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
              EKG findings (Select One)
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

        <form className={classes.secondform}>
          <Grid
            container
            className={classes.formgrop}
            style={{ marginTop: "14px" }}
          >
            <h4 style={{ marginLeft: "130px" }}>
              hsTnl Results
              <label style={{ marginLeft: "40px" }}>Draw Time</label>
            </h4>
            <Grid container item xs={12} md={4}>
              <Typography style={{ marginLeft: "20px", marginTop: "20px" }}>
                First draw
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <TextField
                style={{
                  backgroundColor: "#fff",
                  width: "100px",
                  textAlign: "right",
                }}
                variant="filled"
                label="25 ng/L"
                // placeholder="Enter Last Name"
                type="text"
                id="lastname"
              />
            </Grid>
            <br></br>
            <Grid xs={12} md={4}>
              <TextField
                style={{
                  backgroundColor: "#fff",

                  textAlign: "right",
                }}
                variant="filled"
                label="10/26/2021, 21:40"
                // placeholder="Enter Last Name"
                type="text"
                id="lastname"
              />
            </Grid>
            <Grid container item xs={12} md={4}>
              <Typography style={{ marginLeft: "20px", marginTop: "20px" }}>
                Second draw
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <TextField
                style={{
                  backgroundColor: "#fff",
                  width: "100px",
                  textAlign: "right",
                }}
                variant="filled"
                label="35 ng/L"
                // placeholder="Enter Last Name"
                type="text"
                id="lastname"
              />
            </Grid>
            <br></br>
            <Grid xs={12} md={4}>
              <TextField
                style={{
                  backgroundColor: "#fff",

                  textAlign: "right",
                }}
                variant="filled"
                label="10/26/2021, 21:40"
                // placeholder="Enter Last Name"
                type="text"
                id="lastname"
              />
            </Grid>
            <Grid container item xs={12} md={4}>
              <Typography style={{ marginLeft: "20px", marginTop: "20px" }}>
                Third draw
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <TextField
                style={{
                  backgroundColor: "#fff",
                  width: "100px",
                  textAlign: "right",
                }}
                InputProps={{ classes: { input: classes.resize } }}
                variant="filled"
                label=" ng/L"
                // placeholder="Enter Last Name"
                type="text"
                id="lastname"
              />
            </Grid>
            <br></br>
            <Grid xs={12} md={4}>
              <TextField
                style={{
                  backgroundColor: "#fff",

                  textAlign: "right",
                }}
                variant="filled"
                label="mm/dd/yyyy,hh:mm"
                // placeholder="Enter Last Name"
                type="text"
                id="lastname"
              />
            </Grid>
          </Grid>
        </form>

        {/* ***************** end of second Box *********************** */}
        {/* *****************  start third Box *********************** */}
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>1</Paper> */}
          <Stack xs={12} direction="row" justifycontent="flex-end" spacing={2}>
            <Button
              className={classes.buttonColor}
              variant="contained"
              style={{
                textTransform: "none",
                // padding: "6px 38px",
                backgroundColor: "#414BB2",
              }}
            >
              Exit
            </Button>
            <Button
              className={classes.buttonColor}
              variant="contained"
              style={{
                textTransform: "none",
                // padding: "6px 32px",
                backgroundColor: "#414BB2",
              }}
              onClick={resetFields}
            >
              Reset
            </Button>
            <Button
              className={classes.buttonColor}
              style={{
                textTransform: "none",
                backgroundColor: "#414BB2",
                padding: "12px 8px",
              }}
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
