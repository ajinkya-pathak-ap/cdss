import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { MoreInfoModal } from "../../shared/dialog/ModalPopup";
import { ChestFlowchartModal } from "../../shared/dialog/ModalPopup";

import { green, lightBlue, purple } from "@material-ui/core/colors";
import RiskScoreContributors from "./RiskScoreContributors";
import ChestPainFlowchart from "./ChestPainFlowchart";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";

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
  typo: {
    color: "red",
    fontSize: "12px",
  },
  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },
  hyperLink: {
    color: "white",
    cursor: "pointer",
    textDecoration: "underline",
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

const commonStyles = {
  bgcolor: "#f24726",
  m: 1,
  width: "5rem",
  height: "5rem",
};
const greaterThanSymbol = ">";
export default function AMIOutput() {
  const classes = useStyles();

  const [openPopup, setOpenPopup] = useState(false);
  const [chestPopupOpen, setChestPopupOpen] = useState(false);

  const moreInfoPopup = () => {
    setOpenPopup(true);
  };

  // const chestPainFlowChartPopup = () => {
  //   setChestPopupOpen(true);
  // };

  return (
    <Grid
      lg={12}
      item
      container
      spacing={4}
      style={{
        backgroundColor: "#6D7F9B",
      }}
    >
      {/* *****************First container***************** */}
      <Grid container item xs={12} style={{ margin: "10" }}>
        <Grid item xs={10} className={classes.gridcontainer1}>
          <Card className={classes.gridcontainer}>
            <CardContent>
              <Typography variant="subtitle1" className="fw-bold">
                Risk Score
              </Typography>
              <Typography variant="subtitle1" className="fw-bold">
                Patient's Risk of Major Adverse Cardiac Event within 30 days
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                MACE includes death, AMI, stroke, urgent re-vascularization
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          container
          item
          xs={2}
          className={classes.gridcontainer1}
          alignitems="center"
        >
          <Box sx={{ ...commonStyles, borderRadius: "50%" }} textAlign="center">
            <Typography
              alignitems="center"
              style={{
                fontSize: "22px",
                lineHeight: "3.5",
                fontWeight: "bold",
                color: "black",
              }}
            >
              92%
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* *****************Second container***************** */}
      <Grid container item xs={12}>
        <Grid item xs={10} className={classes.gridcontainer1}>
          <Card className={classes.gridcontainer}>
            <CardContent>
              <Typography variant="subtitle1" className="fw-bold">
                Risk Score Contributors
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                The following are the top three contributors to the risk score
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                1.Troponin change of {greaterThanSymbol}X ng/L/hour between 0
                and 1 hours after symptom onset
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                2.History of Hypertension
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                3.Prior cardiac history
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          container
          item
          xs={2}
          className={classes.gridcontainer1}
          alignitems="center"
        >
          <Button
            size="small"
            variant="contained"
            className={classes.buttonColor}
            onClick={moreInfoPopup}
            style={{ textTransform: "none", marginRight: "5" }}
          >
            <Link className={classes.buttonColor} to="/contributors">
              <span className="m-2">More Info</span>
            </Link>
          </Button>
        </Grid>
      </Grid>
      {/* *****************Second container***************** */}

      <Grid item xs={12}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography variant="subtitle1" className="fw-bold">
              Guidance
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Based on the patient's risk score and the care pathway at your
              institution, the following course of action is recommended
            </Typography>
            <Typography className={classes.typo}>
              Refer patient for Cardiology Consult
            </Typography>
            <Link className={classes.hyperLink} to="/carepath">
              Click here
            </Link>
            &nbsp; to view patient's position of your institution's Chest Pain
            Management Care Flowchart
          </CardContent>
        </Card>
      </Grid>

      <Grid item container spacing={1} md={12}>
        <Grid item container md={6} xs={12} className={classes.alignRight}>
          <Button variant="contained" className={classes.buttonColor}>
            <span style={{ textTransform: "none" }}>
              Acknowledge and Document
            </span>
          </Button>
        </Grid>

        <Grid item container md={6} xs={12} justifycontent="flex-start">
          <Button variant="contained" className={classes.buttonColor}>
            <span style={{ textTransform: "none" }}>Acknowledge only</span>
          </Button>
        </Grid>
      </Grid>
      {/* <MoreInfoModal
        title="Risk Score Calculator"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <RiskScoreContributors />
      </MoreInfoModal>
      <ChestFlowchartModal
        title="Chest Pain Flow Chart"
        chestPopupOpen={chestPopupOpen}
        setChestPopupOpen={setChestPopupOpen}
      >
        <ChestPainFlowchart />
      </ChestFlowchartModal> */}
    </Grid>
  );
}
