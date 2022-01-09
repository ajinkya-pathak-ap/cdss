import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import { riskScoreService } from "../../services/riskScore-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";
import { riskContributorStyles } from "./CustomStyles";

const configData = {
  MRN: "1",
  EncounterNumber: "1",
};

export default function RiskScoreContributors(props) {
  const classes = riskContributorStyles();
  const [isFetching, setIsFetching] = useState(true);
  const [riskScoreContributors, setRiskScoreContributors] = useState({});

  useEffect(() => {
    fetchRiskScoreContributors(configData);
  }, [0]);

  const fetchRiskScoreContributors = (config) => {
    if (props.localMode) {
      riskScoreService.getRiskScoreContributorsLocal(config).then(
        (response) => {
          setRiskScoreContributors(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
        }
      );
    } else {
      riskScoreService.getRiskScoreContributors(config).then(
        (response) => {
          setRiskScoreContributors(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
        }
      );
    }
  };

  /****************methods**************/

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid
        container
        spacing={4}
        className={classes.contrimainContainer}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12} xs={12} md={12}>
          <Box sx={{ bgcolor: "#6D7F9B", minHeight: "250px" }}>
            {/* *****************First container***************** */}
            <Grid
              container
              item
              xs={12}
              md={12}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={10}>
                <Card className={classes.contribcontainer}>
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography
                      variant={"h6"}
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        paddingTop: "90px",
                        textAlign: "center",
                      }}
                    >
                      {riskScoreContributors.value.riskScoreContributors}
                      {/* Provide the Details for the Risk Score Contributors */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <br></br>
            <br></br>

            <Grid item xs={12} container className={classes.alignRight}>
              <Button variant="contained" className={classes.buttonColor}>
                <Link className={classes.whiteBtn} to="/amioutput">
                  <span className="m-2">OK</span>
                </Link>
              </Button>
              <br />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
