import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import "./styles.css";
import { Typography } from "@material-ui/core";
import { patientInfoService } from "../../services/patientInfo-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { CDSInputStyles, bootstrappedInput } from "./CustomStyles";

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
          console.log(response.data);
        },
        (error) => {
          return;
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
      >
        <Grid item container md={6} xs={12} className={classes.patientHistory}>
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
              value={race}
              onChange={handleRace}
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
              value={race}
              onChange={handleRace}
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
              value={riskFactors}
              onChange={handleRiskFactors}
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
          className={classes.ekgfindingscont}
        >
          <Grid item xs={12} md={12} className={classes.ekgfindingscont2}>
            <FormGroup className={classes.formgrop}>
              <FormControl component="fieldset">
                <FormLabel
                  className={classes.ekgformlabel}
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    color: "#fff",
                    fontWeight: "800",
                  }}
                  component="legend"
                >
                  EKG findings(Select One)
                </FormLabel>
                <br />
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    className={classes.patientinfo}
                    style={{}}
                    type="radio"
                    id="rd_1"
                    name="rd"
                    class="custom-control-input green"
                    value="Yes"
                  />
                  &nbsp;
                  <label
                    className={classes.patientinfolabelfont}
                    class="custom-control-label"
                    for="rd_1"
                  >
                    {/* ST deviation, but LBBB, LVH, repolarization changes */}
                    {/* {patientInfo.value.modelDetails[0].modelInputKeyName} */}
                  </label>
                </div>
                <br />

                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="rd_2"
                    name="rd"
                    class="custom-control-input red"
                    value="No"
                  />
                  <label
                    style={{ fontSize: "14px" }}
                    class="custom-control-label"
                    for="rd_2"
                  >
                    &nbsp;
                    {/* No ST deviation, but LBBB, LVH, repolarization changes */}
                    {/* {patientInfo.value.modelDetails[1].modelInputKeyName} */}
                  </label>
                </div>
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
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
                    className={classes.firstinputspace2}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid container item xs={12} md={4}>
                  <Typography className={classes.seconddrawtypo}>
                    Second draw
                  </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
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
                    className={classes.secondinputspace2}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid container item xs={12} md={4}>
                  <Typography className={classes.thirddrawtypo}>
                    Third draw
                  </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
                    className={classes.thirdinputspace1}
                    inputProps={{
                      className: classes.inputFields,
                    }}
                  ></input>
                </Grid>
                <Grid xs={6} md={4}>
                  <input
                    type="email"
                    class="form-control"
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
    );
  }
}
