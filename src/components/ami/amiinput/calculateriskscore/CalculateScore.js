import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Button from "@mui/material/Button";
// import "./styles.css";
import { CalculateScoreStyles, BootstrapButton } from "./CalculateScoreStyles";

const Calculatescore = () => {
  const classes = CalculateScoreStyles();
  return (
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
          //   onClick={resetFields}
        >
          Reset
        </Button>
      </Grid>
      <Grid item xs={4} md={6}>
        <Button
          className={`${classes.buttonColor} ${classes.riskScore1}`}
          style={{
            textTransform: "none",
            backgroundColor: "#414BB2",
          }}
          variant="contained"
          href="#contained-buttons"
        >
          Calculate Risk Score
        </Button>
        <Button
          className={classes.buttonColor}
          className={classes.riskScore2}
          style={{
            textTransform: "none",
            backgroundColor: "#414BB2",
            display: "none",
          }}
          variant="contained"
          href="#contained-buttons"
        >
          RiskScore
        </Button>
      </Grid>
    </Grid>
  );
};

export default Calculatescore;
