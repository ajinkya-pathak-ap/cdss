import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import { btnStyles } from "./CalculateScoreStyles";

const Calculatescore = () => {
  const classes = btnStyles();

const riskScoreCalculate = () => {

}

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={3}>
        <Button className={classes.buttonColor} variant="contained">
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
          onClick={riskScoreCalculate}
>
          Calculate Risk Score
        </Button>
        <Button
          className={`${classes.buttonColor} ${classes.riskScore2}`}
          style={{
            textTransform: "none",
            backgroundColor: "#414BB2",
            display: "none",
          }}
          variant="contained"
          onClick={riskScoreCalculate}
>
          RiskScore
        </Button>
      </Grid>
    </Grid>
  );
};

export default Calculatescore;
