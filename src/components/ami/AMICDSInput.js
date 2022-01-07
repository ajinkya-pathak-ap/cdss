import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { grey } from "@mui/material/colors";

import FormLabel from "@mui/material/FormLabel";
import "./styles.css";
import { Typography } from "@material-ui/core";
import { patientInfoService } from "../../services/patientInfo-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { CDSInputStyles, bootstrappedInput } from "./CustomStyles";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

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

export default function AMICSInput(props) {
  const classes = CDSInputStyles();

  const resetFields = () => {};
  const [race, setRace] = useState("Asian");
  const [presentingSymptoms, setPresentingSymptoms] =
    useState("Left Hand Pain");
  const [symptomOnset, setSymptomOnset] = useState("1 Hrs");
  const [riskFactors, setrRiskFactors] = useState("prior AMI");

  const configData = {
    MRN: "1",
    EncounterNumber: "1",
  };

  const [isFetching, setIsFetching] = useState(true);
  const [patientInfo, setPatientInfo] = useState({});

  useEffect(() => {
    getPatientInfo(configData);
  }, [0]);

  const getPatientInfo = (config) => {
    if (props.localMode) {
      patientInfoService.getPatientInfoLocal(config).then(
        (response) => {
          setPatientInfo(response.data);
          setIsFetching(false);
        },
        (error) => {
          throw new Error("API Failure...");
        }
      );
    } else {
      patientInfoService.getPatientInfo(config).then(
        (response) => {
          setPatientInfo(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
          /**
           * error boundry
           */
        }
      );
    }
  };

  const BootstrapInput = bootstrappedInput;

  function handleRace(e) {
    setRace(e.target.value);
  }

  const handlePresentingSymptoms = (e) => {
    setPresentingSymptoms(e.target.value);
  };

  const handleSymptomOnset = (e) => {
    setSymptomOnset(e.target.value);
  };

  const handleRiskFactors = (e) => {
    setrRiskFactors(e.target.value);
  };

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid
        md={12}
        xs={12}
        item
        container
        spacing={4}
        className={`${classes.root} ${classes.holder}`}
        style={{
          backgroundColor: "#6D7F9B",
          padding: "30px",
          marginTop: "30px",
        }}
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

            <FormControl variant="standard" style={{ backgroundColor: "#fff" }}>
              <InputLabel
                style={{ color: "red", marginTop: "5px", marginLeft: "9px" }}
                shrink
                htmlFor="bootstrap-input"
              >
                Patient Age*
              </InputLabel>
              <br></br>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                value={patientInfo.result.patientDetails.age}
                style={{
                  // padding: "8px 3px",
                  paddingTop: "10px",
                  margin: "6px",
                  backgroundColor: "white",
                  border: "1px solid #808080",
                  pointerEvents: "none",
                }}
              ></input>
            </FormControl>

            <TextField
              className={classes.textFieldColor}
              id="Race"
              select
              label="Gender"
              variant="standard"
              value={race}
              onChange={handleRace}
              inputProps={{
                className: classes.fontTypeOne,
              }}
            >
              <MenuItem style={{ textAlign: "center" }} value="Asian">
                {patientInfo.result.patientDetails.gender[0].description}
              </MenuItem>
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
              {patientInfo.result.patientDetails.race.map((v) => (
                <MenuItem
                  style={{ textAlign: "center" }}
                  value={v.description}
                  key={v.raceId}
                >
                  {v.description}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.textFieldColor}
              id="riskFactors"
              select
              label="Presenting Symptoms"
              variant="standard"
              value={riskFactors}
              onChange={handleRiskFactors}
              inputProps={{
                className: classes.fontTypeOne,
              }}
            >
              {patientInfo.result.patientDetails.symptoms.map((v) => (
                <MenuItem value={v} key={v}>
                  {v}
                </MenuItem>
              ))}
            </TextField>

            <TextField
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
            </TextField>

            <TextField
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
              {patientInfo.result.patientDetails.riskFactors.map((v) => (
                <MenuItem value={v} key={v}>
                  {v}
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
              <FormControl component="fieldset">
                <FormLabel
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    color: "white",
                    fontWeight: "800",
                  }}
                  component="legend"
                >
                  EKG findings(Select One)
                </FormLabel>
                <br />

                {patientInfo.result.modelDetails.map((v, i) => (
                  <>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        style={{
                          color: "#fff",
                          borderColor: "#7B1FA2",
                          backgroundColor: "red",
                        }}
                        type="radio"
                        id={`rd_${i}`}
                        name="rd"
                        class="custom-control-input green"
                        value="Yes"
                      />
                      &nbsp;
                      <label
                        style={{ fontSize: "14px" }}
                        class="custom-control-label"
                        htmlFor={`rd_${i}`}
                      >
                        {v.modelInputKeyName}
                      </label>
                    </div>
                    <br />
                  </>
                ))}
              </FormControl>
            </FormGroup>
          </Grid>
          {/* ***************** end of first Box *********************** */}

          <form className={classes.secondform}>
            <Grid
              container
              className={classes.formgrop}
              style={{ marginTop: "14px" }}
            >
              <Grid
                container
                style={{
                  marginTop: "10px",
                  marginBottom: "8px",
                }}
                spacing={2}
              >
                <Grid item xs={6} md={6}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "700",
                      marginLeft: "17px",
                      // marginTop: "20px",
                    }}
                  >
                    hsTnl Results
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Typography variant="h6" className={classes.drawtime}>
                    Draw Time
                  </Typography>
                </Grid>

                <Grid container item xs={12} md={4}>
                  <Typography className={classes.firstdraw}>
                    First draw
                  </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
                    className={classes.firstinputspace}
                    id="exampleFormControlInput1"
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    className={classes.firstinputspace2}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid container item xs={12} md={4}>
                  <Typography
                    style={{
                      marginLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    Second draw
                  </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    className={classes.secondinputspace1}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    className={classes.secondinputspace2}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid container item xs={12} md={4}>
                  <Typography
                    style={{
                      marginLeft: "20px",
                      fontSize: "14px",
                      // marginTop: "5px",
                    }}
                  >
                    Third draw
                  </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                  {/* <TextField
                  style={{
                    backgroundColor: "#fff",
                    width: "100px",
                    textAlign: "right",
                  }}
                  inputProps={{
                    className: classes.inputFields,
                  }}
                  variant="filled"
                  // value="ng/L"
                  // value={`${patientInfo.value.troponins[2].value} ${patientInfo.value.troponins[2].units}`}
                  type="text"
                  id="third-draw"
                /> */}
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    className={classes.thirdinputspace1}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid xs={6} md={4}>
                  {/* <TextField
                  style={{
                    backgroundColor: "#fff",
                    textAlign: "right",
                  }}
                  variant="filled"
                  // value="mm/dd/yyyy,hh:mm"
                  // value={`${patientInfo.value.troponins[2].resultDateTime}`}
                  type="text"
                  id="third-draw-date"
                  inputProps={{
                    className: classes.inputFields,
                  }}
                /> */}
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    className={classes.thirdinputspace2}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
              </Grid>
            </Grid>
            <br />
          </form>

          {/* ***************** end of second Box *********************** */}
          {/* *****************  start third Box *********************** */}
          <Grid container spacing={2}>
            {/* <Paper className={classes.paper}>1</Paper> */}
            {/* <Grid item xs={12} md={4}> */}
            <Grid item xs={4} md={3}>
              <Button
                className={classes.buttonColor}
                variant="contained"
                style={{
                  textTransform: "none",
                  backgroundColor: "#414BB2",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                Exit
              </Button>
            </Grid>
            <Grid item xs={4} md={3}>
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
            </Grid>
            <Grid item xs={4} md={6}>
              <Button
                className={classes.buttonColor}
                style={{
                  textTransform: "none",
                  backgroundColor: "#414BB2",
                  // padding: "12px 12px",
                }}
                variant="contained"
                href="#contained-buttons"
              >
                Calculate Risk Score
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* ***************** end of third Box *********************** */}
      </Grid>
      // </Grid>
    );
  }
}
