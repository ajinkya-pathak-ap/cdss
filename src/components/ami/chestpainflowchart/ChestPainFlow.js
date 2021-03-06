import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ChestpainStyles } from "./ChestPainStyles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function ChestPainFlow() {
  const classes = ChestpainStyles();

  return (
    <Grid container className={classes.outsidecontainer}>
      <Grid lg={12} md={12} xs={12} item>
        <Grid container justify="center">
          <Grid container className={classes.insidecontainer}>
            <Grid lg={12} xs={12} item alignItems="center">
              <Typography className={classes.typoofhospitalhead}>
                Hospital's Chest Pain Management Flow Chart
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" lg={12} xs={12} item>
            <Button variant="contained" className={classes.buttonColor}>
              <Link className={classes.whiteBtn} to="/amioutput">
                <span className="m-3">OK</span>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
