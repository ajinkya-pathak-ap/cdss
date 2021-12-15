import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";

import { riskScoreService } from "../../services/riskScore-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";

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
  acknowledgeBtn_1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  acknowledgeBtn_2: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "10px !important",
      marginLeft: "4px !important",
    },
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
const configData = {
  MRN: "1",
  EncounterNumber: "1",
};

export default function AMIOutput() {
  const classes = useStyles();

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

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid container spacing={4} className={classes.holder}>
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
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {details.text_2}
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
            <Box
              sx={{ ...commonStyles, borderRadius: "50%" }}
              textAlign="center"
            >
              <Typography alignitems="center" className={classes.circle}>
                {riskScore.value.riskScore}%
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
                  {contributors.text_1}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.firstContributor}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.secondContributor}
                </Typography>
                <Typography className={`${classes.headerTextThree}`}>
                  {contributors.thirdContributor}
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
                {guidance.text_1}
              </Typography>
              <Typography className={classes.typo}>
                {guidance.text_2}
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
                  Acknowledge(to write Risk Contributors)
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
              className={classes.buttonColor}
            >
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
}
