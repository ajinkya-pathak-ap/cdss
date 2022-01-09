import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import { riskScoreService } from "../../services/riskScore-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { RiskScoreStyles } from "./RiskScoreStyles";

export default function RiskScore(props) {
  const classes = RiskScoreStyles();

  const [riskScore, setRiskScore] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const [details, setDetails] = useState({
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
          //   getRiskScoreDetails(response.data.result.riskScoreDetails);
          //   getGuidance(response.data.result.guidance);
          riskScoreContributors(response.data.result);
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
          //   getRiskScoreDetails(response.data.result.riskScoreDetails);
          //   getGuidance(response.data.result.guidance);
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

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid container spacing={3} className={classes.mainContainer}>
        {/* *****************First container***************** */}
        <Grid container item xs={12}>
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
            <Box textAlign="center" className={classes.smallMargin}>
              <Typography
                alignitems="center"
                className={classes.riskScoreShell}
              >
                {riskScoreRange()}
                {/* {riskScore.result.score} */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
