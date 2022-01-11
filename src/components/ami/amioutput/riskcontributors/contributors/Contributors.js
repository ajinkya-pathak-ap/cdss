import { React, useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "../../../../../shared/material/mui";
import { ContributorsStyles } from "./ContributorsStyles";
// import "../styles.css";
import { utils } from "../../AmiOutputUtils";

const Contributors = (props) => {
  const classes = ContributorsStyles();
  //   const { positiveContributors, negativeContributors } = props.result;
  return (
    <Grid item xs={7} lg={8} className={classes.gridcontainer2}>
      <Card className={classes.gridcontainer}>
        <CardContent>
          <Typography className={`${classes.headerText}`}>
            Risk Score Contributors
          </Typography>
          <Typography className={`${classes.headerTextThree}`}>
            Factors that increase the 30-day MACE risk
            {/* {positiveContributors
              ? utils.iterateOrderedList(
                  utils.splitString(positiveContributors, ",")
                )
              : ""} */}
          </Typography>
          <Typography className={`${classes.headerTextThree}`}>
            Factors that decrease the 30-day MACE risk
            {/* {negativeContributors
              ? utils.iterateOrderedList(
                  utils.splitString(negativeContributors, ",")
                )
              : ""} */}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Contributors;
