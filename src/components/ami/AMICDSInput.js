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
  root: {
    flexGrow: 1,
    backgroundColor: "#6D7F9B",
    padding: "30px",
    margin: "4%",
  },

  secondform: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1),
    },
  },

  formgrop: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignItems: "flex-start",
    marginLeft: "15px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignItems: "flex-start",
    marginLeft: "17px",
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
    border: "solid 1px red",
  },
}));

const Gender = [
  {
    value: "1",
    label: "male",
  },
  {
    value: "2",
    label: "female",
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
    label: "tttttttt",
  },
  {
    value: "8",
    label: "tttttttt",
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

  // const handleChange1 = (event) => {
  //   setCurrency(event.target.value);
  // };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container xs={6} spacing={2}>
          <Grid item xs={12} className={classes.formgrop}>
            <form className={classes.secondform}>
              <Typography style={{ textAlign: "left" }}>
                Patient History
              </Typography>
              <Grid container>
                <Grid item xs={12}>
                  <h5>Demographics Information pulled from EHR</h5>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className={classes.textFieldColor}
                      id="age"
                      label="Age"
                      variant="outlined"
                    />

                    <TextField
                      className={classes.textFieldColor}
                      id="gender"
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
                      // onChange={handleChange1}
                    >
                      {riskFactor.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>

        <Grid xs={6} container spacing={2}>
          {/* *****************  first Box *********************** */}
          <Grid item xs={12}>
            <FormGroup className={classes.formgrop}>
              <Typography className={classes.typo}>
                EKG Findings(Select One)
              </Typography>
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
            <Grid container className={classes.formgrop}>
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
    </div>
  );
}
