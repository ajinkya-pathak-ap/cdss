import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  gridcontainer1: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    justifycontent: "left",
  },

  alignRight: {
    justifyContent: "flex-end",
  },

  whiteBtn: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const ChestPainFlowchart = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container item xs={12} spacing={4} justifycontent="center">
        <Grid item xs={12} sm={12}>
          <Box>Tree Chart Appears Here..</Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box>
            <Grid item xs={12} container className={classes.alignRight}>
              <div className={classes.alignRight}>
                <Button variant="contained" className={classes.buttonColor}>
                  <Link className={classes.whiteBtn} to="/amioutput">
                    <span className="m-2">OK</span>
                  </Link>
                </Button>
              </div>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ChestPainFlowchart;
