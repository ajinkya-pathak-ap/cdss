import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import ModalPopup from "../../shared/dialog/ModalPopup";

import { green, lightBlue, purple } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outsidecontainer: {
    height: 350,
    marginRight: "auto",
    marginLeft: "auto",
    background: "#6D7F9B",
    marginTop: "30px",
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
    },
  },

  insidecontainer: {
    height: 70,

    borderRadius: "10px",
    marginRight: "auto",
    marginLeft: "auto",
    background: "#fff",
    marginBottom: "50px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
  },

  buttonColor: {
    backgroundColor: "#414BB2",
    color: "#fff",
    marginRight: "40px",
    marginTop: "80px",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },
  whiteBtn: {
    color: "#fff",
    textDecoration: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
}));

export default function RiskScoreContributors() {
  const classes = useStyles();
  /****************methods**************/

  return (
    <Grid container>
      <Grid item sm={12} xs={12} md={12} marginTop={10}>
        <Grid container justify="center">
          <Grid
            container
            className={classes.outsidecontainer}
            alignItems="center"
            justify="center"
          >
            <Grid lg={12} md={12} xs={12} item>
              <Grid container justify="center">
                <Grid
                  container
                  className={classes.insidecontainer}
                  alignItems="center"
                  justify="center"
                >
                  <Grid lg={12} xs={12} item>
                    <Typography style={{ fontSize: "16px" }}>
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
        </Grid>
      </Grid>
    </Grid>
  );
}
