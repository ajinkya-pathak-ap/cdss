import { React, useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "../../../../shared/material/mui";
import { Link } from "react-router-dom";
import {
  BootstrapButton,
  RiskContributorStyles,
} from "./RiskscoreContributorStyles";
import "../styles.css";
import { utils } from "../AmiOutputUtils";
import Contributors from "./contributors/Contributors";

const RiskscoreContributors = (props) => {
  const classes = RiskContributorStyles();
  const { positiveContributors, negativeContributors } = props.result;

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
              {positiveContributors
                ? utils.iterateOrderedList(
                    utils.splitString(positiveContributors, ",")
                  )
                : ""}
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              Factors that decrease the 30-day MACE risk
              {negativeContributors
                ? utils.iterateOrderedList(
                    utils.splitString(negativeContributors, ",")
                  )
                : ""}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* <Contributors ></Contributors> */}
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
