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
    <Container>
      <Grid container spacing={4}>
        <Grid item sm={12} xs={12} marginTop={10}>
          <Box
            sx={{ bgcolor: "#6D7F9B", height: "50vh" }}
            margin={10}
            paddingLeft={4}
            paddingRight={4}
            paddingTop={5}
          >
            <Grid container item xs={12} spacing={2}>
              {/* *****************First container***************** */}
              <Grid container item xs={12} justify="center" alignItems="center">
                <Grid item xs={10} className={classes.gridcontainer1}>
                  <Card className={classes.gridcontainer}>
                    <CardContent>
                      <Typography style={{ fontSize: "22px" }}>
                        Hospital's Chest Pain Management Flow Chart
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.alignRight}>
                <Box>
                  <Grid item xs={12} container className={classes.alignRight}>
                    <Button variant="contained" className={classes.buttonColor}>
                      <Link className={classes.whiteBtn} to="/amioutput">
                        <span className="m-2">OK</span>
                      </Link>
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
