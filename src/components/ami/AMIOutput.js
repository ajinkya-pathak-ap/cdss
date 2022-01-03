import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { riskScoreService } from "../../services/riskScore-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { amiOutputStyles } from "./CustomStyles";

const BootstrapButton = styled(Button)((props) => ({
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
  [props.theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

const configData = {
  MRN: "1",
  EncounterNumber: "1",
};

export default function AMIOutput(props) {
  const classes = amiOutputStyles();

  const [riskScore, setRiskScore] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [details, setDetails] = useState({
    text_1: "",
    text_2: "",
  });
  const [contributors, setContributors] = useState({
    text_1: "",
    firstContributor: "",
    secondContributor: "",
    thirdContributor: "",
  });
  const [guidance, setGuidance] = useState({
    text_1: "",
    text_2: "",
  });

  useEffect(() => {
    fetchRiskScore(configData);
  }, [0]);

  const fetchRiskScore = (config) => {
    if (props.localMode) {
      riskScoreService.getRiskScoreLocal(config).then(
        (response) => {
          setRiskScore(response.data);
          setIsFetching(false);
          getRiskScoreDetails(response.data.value.riskScoreDetails);
          getRiskScoreContrubutors(response.data.value.contributors);
          getGuidance(response.data.value.guidance);
        },
        (error) => {
          return;
        }
      );
    } else {
      riskScoreService.getRiskScore(config).then(
        (response) => {
          setRiskScore(response.data);
          setIsFetching(false);
          getRiskScoreDetails(response.data.value.riskScoreDetails);
          getRiskScoreContrubutors(response.data.value.contributors);
          getGuidance(response.data.value.guidance);
        },
        (error) => {
          return;
        }
      );
    }
  };

  const getRiskScoreDetails = (_string) => {
    let strArr = _string.split("$");
    setDetails({ ...details, text_1: strArr[0], text_2: strArr[1] });
  };

  const getRiskScoreContrubutors = (_string) => {
    let strArr = _string.split("$");
    setContributors({
      ...contributors,
      text_1: strArr[0],
      firstContributor: strArr[1],
      secondContributor: strArr[2],
      thirdContributor: strArr[3],
    });
  };

  const getGuidance = (_string) => {
    let strArr = _string.split("$");
    setGuidance({ ...guidance, text_1: strArr[0], text_2: strArr[1] });
  };

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid container spacing={3} className={classes.mainContainer}>
        {/* *****************First container***************** */}
        <Grid container item xs={12} style={{ margin: "10" }}>
          <Grid item xs={8} className={classes.gridcontainer1}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography className={`${classes.headerText}`}>
                  Risk Score
                </Typography>
                <Typography className={`${classes.headerText}`}>
                  {details.text_1}
                  {/* Patient's Risk of major Adverse Cardiac Event within 30 days */}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {details.text_2}
                  {/* MACE includes death, AMI, stroke,urgent re-vascularization */}
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
            justifyContent="center"
          >
            <Box textAlign="center" className={classes.smallMargin}>
              <Typography
                alignitems="center"
                className={classes.riskScoreShell}
              >
                {riskScore.value.riskScore}%{/* 88% */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* *****************Second container***************** */}
        <Grid container item xs={12}>
          <Grid item xs={7} lg={8} className={classes.gridcontainer1}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography className={`${classes.headerText}`}>
                  Risk Score Contributors
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.text_1}
                  {/* The Following are the top three contributors to the risk score */}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.firstContributor}
                  {/* 1. Troponin change of Xng/L/hour between 0 and 1 hours after */}
                  {/* symptom onset */}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.secondContributor}
                  {/* 2. History of hypertension */}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.thirdContributor}
                  {/* 3. Prior cardiac history */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            item
            xs={5}
            lg={4}
            className={`${classes.gridcontainer1} ${classes.moreInfo}`}
            direction="column"
            alignItems="flex-end"
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
                {guidance.text_1}
                {/* Based on the patient's risk score and the care pathway at your */}
                institution, the following course of action is recommended
              </Typography>
              <Typography className={classes.typo}>
                {guidance.text_2}
                {/* Refer patient for Cardiology Consultant */}
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
            <BootstrapButton
              variant="contained"
              className={`${classes.buttonColor} ${classes.acknowledgeBtn_1}`}
            >
              <Link className={classes.buttonColor} to="">
                <span className="m-2">
                  Acknowledge(Document Risk Contributors)
                </span>
              </Link>
            </BootstrapButton>
            <BootstrapButton
              variant="contained"
              className={`${classes.buttonColor} ${classes.acknowledgeBtn_2}`}
            >
              <Link className={classes.buttonColor} to="">
                <span className="m-2">Acknowledge</span>
              </Link>
            </BootstrapButton>
            <BootstrapButton
              variant="contained"
              className={classes.buttonColor1}
            >
              <Link className={classes.buttonColor1} to="/amioutput">
                <span className="m-2">Close</span>
              </Link>
            </BootstrapButton>
          </Stack>
        </Grid>
      </Grid>
    );
  }
}
