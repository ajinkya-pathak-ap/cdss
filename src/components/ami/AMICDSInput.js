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
    padding: "16px",
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
}));

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
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container xs={6} spacing={2}>
          <Grid item xs={12}>
            <FormGroup className={classes.formgrop}>
              <Typography className={classes.typo}>Patient History</Typography>
              <br></br>
              <Typography style={{ fontSize: "12px", alignItems: "center" }}>
                Demographics Information pulled from EHR
              </Typography>
              <br></br>

              <TextField
                sx={{ m: 1, minWidth: 80 }}
                style={{ width: "95%", backgroundColor: "white" }}
                onChange={onTextChange}
                value={textValue}
                label={"Patient Age"} //optional
              />

              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{ backgroundColor: "white" }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChangeSelect}
                  autoWidth
                  label="Gender"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={21}>Female</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{ backgroundColor: "white" }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Race
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChangeSelect}
                  autoWidth
                  label="Racer"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Race</MenuItem>
                  <MenuItem value={21}>Race2</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{ backgroundColor: "white" }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Presenting Sym
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChangeSelect}
                  autoWidth
                  label="Chest Pain +2"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Chest Pain +2</MenuItem>
                  <MenuItem value={21}>Chest Pain +3</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{ backgroundColor: "white" }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Time Since symptom onset
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChangeSelect}
                  autoWidth
                  label="Select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Chest Pain +2</MenuItem>
                  <MenuItem value={21}>Chest Pain +3</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
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
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>1</Paper>
          </Grid> */}

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
          {/* ***************** end of second Box *********************** */}

          {/* *****************  start third Box *********************** */}
          <Grid item xs={12} container justifyContent="center">
            {/* <Paper className={classes.paper}>1</Paper> */}
            <Stack xs={6} direction="row" spacing={2}>
              <Button
                className={classes.buttonColor}
                variant="contained"
                style={{ textTransform: "none" }}
              >
                Exit
              </Button>
              <Button
                className={classes.buttonColor}
                variant="contained"
                style={{ textTransform: "none" }}
              >
                Reset
              </Button>
              <Button
                className={classes.buttonColor}
                style={{ textTransform: "none" }}
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
