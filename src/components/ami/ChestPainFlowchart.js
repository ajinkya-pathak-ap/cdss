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
    height: 170,
    marginRight: "auto",
    marginLeft: "auto",
    background: "#fff",
    marginBottom: "0px",
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },

  gridcontainer: {
    background: "#fff",
    color: "#000",
    textAlign: "center",
    minHeight: "250px",
    borderRadius: "50px",
  },
  gridcontainer1: {
    background: "#050038",
    color: "#fff",
    textAlign: "center",
    minHeight: "80px",
    borderRadius: "50px",
  },
  typo: {
    color: "red",
    fontSize: "12px",
  },
  buttonColor: {
    backgroundColor: "#414BB2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },
  whiteBtn: {
    color: "#fff",
    textDecoration: "none",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RiskScoreContributors() {
  const classes = useStyles();
  /****************methods**************/

  return (
    <Grid container>
      <Grid item sm={12} xs={12} md={12} marginTop={10}>
        {/* <Box
          style={{
            width: "60%",
            position: "absolute",
            left: "250px",
            marginTop: "40px",
          }}
          sx={{ bgcolor: "#6D7F9B", height: "70vh" }}
        
          paddingTop={4}
          alignItems="center"
        > */}
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
                  <Grid lg={12} item>
                    Content Here
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container item xs={12} spacing={2}> */}
        {/* *****************First container***************** */}
        {/* <Grid container item xs={12} justify="center" alignItems="center">
              <Grid item xs={10} className={classes.gridcontainer1}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography style={{ fontSize: "22px" }}>
                      Hospital's Chest Pain Management Flow Chart
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid> */}

        {/* <Grid item xs={12} sm={12} className={classes.alignRight}>
              <Box>
                <Grid item xs={12} container className={classes.alignRight}>
                  <Button variant="contained" className={classes.buttonColor}>
                    <Link className={classes.whiteBtn} to="/amioutput">
                      <span className="m-2">OK</span>
                    </Link>
                  </Button>
                </Grid>
              </Box>
            </Grid> */}
        {/* </Grid> */}
        {/* </Box> */}
      </Grid>
    </Grid>
  );
}
