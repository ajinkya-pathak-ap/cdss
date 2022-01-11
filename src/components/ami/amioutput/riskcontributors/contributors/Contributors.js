import { React, useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "../../../../../shared/material/mui";
import { ContributorsStyles } from "./ContributorsStyles";
import "../../styles.css";
import { utils } from "../../AmiOutputUtils";

const Contributors = (props) => {
  const classes = ContributorsStyles();
  return (
    <Card className={classes.gridcontainer}>
      <CardContent>
        <Typography className={`${classes.headerText}`}>
          Risk Score Contributors
        </Typography>
        <Typography className={`${classes.headerTextThree}`}>
          Factors that increase the 30-day MACE risk
          {props.positiveContr
            ? utils.iterateOrderedList(
                utils.splitString(props.positiveContr, ",")
              )
            : ""}
        </Typography>
        <Typography className={`${classes.headerTextThree}`}>
          Factors that decrease the 30-day MACE risk
          {props.negativeContr
            ? utils.iterateOrderedList(
                utils.splitString(props.negativeContr, ",")
              )
            : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contributors;
