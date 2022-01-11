import { React, useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "../../../../shared/material/mui";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const loadMoreInfo = () => {
    navigate("/contributors");
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={7} lg={8} className={classes.gridcontainer2}>
        <Contributors
          positiveContr={positiveContributors}
          negativeContr={negativeContributors}
        ></Contributors>
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
            onClick={loadMoreInfo}
          >
            <span
              className={`${classes.buttonColor} ${classes.moreInfoBtn_1} m-2`}
            >
              More Info
            </span>

            <span
              className={`${classes.buttonColor} ${classes.moreInfoBtn_2} m-2`}
            >
              More
            </span>
          </BootstrapButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RiskscoreContributors;
