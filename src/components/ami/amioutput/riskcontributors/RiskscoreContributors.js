import { React, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  BootstrapButton,
  RiskContributorStyles,
} from "./RiskscoreContributorStyles";
import "../styles.css";

const RiskscoreContributors = (props) => {
  useEffect(() => {
    riskScoreContributors();
  }, []);

  const classes = RiskContributorStyles();
  const { positiveContributors, negativeContributors } = props.result;

  const [positiveCont, setPositiveCont] = useState([]);
  const [negativeCont, setNegativeCont] = useState([]);

  const riskScoreContributors = () => {
    setPositiveCont(positiveContributors.split(","));
    setNegativeCont(negativeContributors.split(","));
  };

  const mapList = (_arr) => {
    return (
      <ol>
        {_arr.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ol>
    );
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={7} lg={8} className={classes.gridcontainer2}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={`${classes.headerText}`}>
              Risk Score Contributors
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              Factors that increase the 30-day MACE risk
              {mapList(positiveCont)}
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              Factors that decrease the 30-day MACE risk
              {mapList(negativeCont)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        container
        item
        xs={5}
        lg={4}
        className={`${classes.gridcontainer2} ${classes.moreInfo}`}
        direction="column"
      >
        <Stack spacing={4} direction="row">
          <BootstrapButton
            variant="contained"
            className={classes.buttonColor}
            style={{
              marginBottom: "40px",
            }}
          >
            <Link
              className={`${classes.buttonColor} ${classes.moreInfoBtn_1}`}
              to="/contributors"
            >
              <span className="m-2">More Info</span>
            </Link>
            <Link
              className={`${classes.buttonColor} ${classes.moreInfoBtn_2}`}
              to="/contributors"
            >
              <span className="m-2">More</span>
            </Link>
          </BootstrapButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RiskscoreContributors;
