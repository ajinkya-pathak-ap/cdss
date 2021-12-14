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
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "65%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
  },

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
    fontSize: "14px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
  },

  headerTextTwo: {
    fontWeight: "bold",
    fontSize: "16px",
  },

  headerTextThree: {
    fontSize: "14px",
  },

  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    textTransform: "none",
  },

  hyperLink: {
    color: "white",
    cursor: "pointer",
    textDecoration: "underline",
  },

  alignRight: {
    justifyContent: "flex-end",
  },

  circle: {
    fontSize: "42px",
    lineHeight: "3.5",
    fontWeight: "bold",
    color: "black",
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "14px",
  color: "#fff",
  padding: "6px 32px",
  lineHeight: 1.9,
  backgroundColor: "#414bb2",
  fontFamily: ["Roboto"].join(","),

  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const commonStyles = {
  bgcolor: "#f24726",
  m: 1,
  width: "9rem",
  height: "9rem",
};

const greaterThanSymbol = ">";

export default function AMIOutput() {
  const classes = useStyles();

  const [openPopup, setOpenPopup] = useState(false);
  const [chestPopupOpen, setChestPopupOpen] = useState(false);

  const moreInfoPopup = () => {
    setOpenPopup(true);
  };

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
  const contributors = {
    firstvalue:
      "1.Troponin change of X ng/L/hour between 0 and 1 hours after symptom onset",
    secondvalue: "2. History of Hypertension",
    thirdvalue: "3. Prior cardiac history",
  };
  const chestPainFlowChartPopup = () => {
    setChestPopupOpen(true);
  };

  return (
    <Grid
      lg={12}
      container
      spacing={4}
      className={classes.holder}
      alignItems="center"
      justify="center"
    >
      {/* *****************First container***************** */}
      <Grid container item xs={12} style={{ margin: "10" }}>
        <Grid item xs={8} className={classes.gridcontainer1}>
          <Card className={classes.gridcontainer}>
            <CardContent>
              <Typography className={`${classes.headerText}`}>
                Risk Score
              </Typography>
              <Typography className={`${classes.headerText}`}>
                Patient's Risk of Major Adverse Cardiac Event within 30 days
              </Typography>
              <Typography className={`${classes.headerTextThree}`}>
                MACE includes death, AMI, stroke, urgent re-vascularization
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          container
          item
          xs={4}
          className={classes.gridcontainer1}
          alignItems="center"
          justify="center"
        >
          <Box sx={{ ...commonStyles, borderRadius: "50%" }} textAlign="center">
            <Typography alignitems="center" className={classes.circle}>
              92%
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* *****************Second container***************** */}
      <Grid container item xs={12}>
        <Grid item xs={9} className={classes.gridcontainer1}>
          <Card className={classes.gridcontainer}>
            <CardContent>
              <Typography className={`${classes.headerText}`}>
                Risk Score Contributors
              </Typography>
              <Typography className={`${classes.headerTextThree}`}>
                The following are the top three contributors to the risk score
              </Typography>
              <Typography className={`${classes.headerTextThree}`}>
                {contributors.firstvalue}
              </Typography>
              <Typography className={`${classes.headerTextThree}`}>
                {contributors.secondvalue}
              </Typography>
              <Typography className={`${classes.headerTextThree}`}>
                {contributors.thirdvalue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          container
          item
          xs={3}
          className={classes.gridcontainer1}
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Stack spacing={4} direction="row">
            <BootstrapButton
              variant="contained"
              className={classes.buttonColor}
              style={{
                marginBottom: "15px",
                marginRight: "20px",
              }}
            >
              <Link className={classes.buttonColor} to="/contributors">
                <span className="m-2">More Info</span>
              </Link>
            </BootstrapButton>
          </Stack>
        </Grid>
      </Grid>
      {/* *****************third container***************** */}
      <Grid item xs={12}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={`${classes.headerText}`}>
              Guidance
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              Based on the patient's risk score and the care pathway at your
              institution, the following course of action is recommended
            </Typography>
            <Typography className={classes.typo}>
              Refer patient for Cardiology Consult
            </Typography>
            <Typography>
              <Link className={classes.hyperLink} to="/carepath">
                Click here
              </Link>
              &nbsp;
              <span className={classes.headerTextThree}>
                to view patient's position of your institution's Chest Pain
                Management Care Flowchart
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} container className={classes.alignRight}>
        <Stack spacing={4} direction="row" container>
          <BootstrapButton variant="contained" className={classes.buttonColor}>
            <Link className={classes.buttonColor} to="">
              <span className="m-2">
                Acknowledge(to write Risk Contributors)
              </span>
            </Link>
          </BootstrapButton>
          <BootstrapButton variant="contained" className={classes.buttonColor}>
            <Link className={classes.buttonColor} to="/amioutput">
              <span className="m-2"> Close</span>
            </Link>
          </BootstrapButton>
        </Stack>
        {/* <Stack spacing={2} direction="row">
          <Button
            style={{
              backgroundColor: "#414bb2",
              color: "#fff",
              fontVariafont: "normal",
              textDecoration: "none",
            }}
            variant="contained"
          >
            Acknowledge(to write Risk Contributors)
          </Button>
          <Button
            style={{
              backgroundColor: "#414bb2",
              color: "#fff",
              fontVariafont: "normal",
              textDecoration: "none",
            }}
            variant="contained"
          >
            Close
          </Button>
        </Stack> */}
      </Grid>
    </Grid>
  );
}
