import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { riskScoreService } from "../../../services/riskScore-service";
import CircularIndeterminate from "../../../shared/preloder/Preloder";
import { RiskContributorStyles } from "./RiskScoreContributorStyles";
import Contributors from "../amioutput/riskcontributors/contributors/Contributors";

export default function RiskScoreContributors(props) {
  const classes = RiskContributorStyles();
  const [isFetching, setIsFetching] = useState(true);
  const [riskScore, setRiskScore] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchRiskScoreContributors();
  }, []);

  const fetchRiskScoreContributors = () => {
    riskScoreService.getRiskScore().then(
      (response) => {
        setRiskScore(response.data);
        setIsFetching(false);
      },
      (error) => {
        return;
      }
    );
  };

  const loadOutput = () => {
    navigate("/amioutput");
  };

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid container spacing={4} className={classes.contrimainContainer}>
        <Grid item sm={12} xs={12} md={12}>
          <Box className={classes.sx}>
            <Grid
              container
              item
              xs={12}
              md={12}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={10}>
                <Contributors
                  positiveContr={riskScore.result.positiveContributors}
                  negativeContr={riskScore.result.negativeContributors}
                ></Contributors>
              </Grid>
            </Grid>

            <br></br>
            <Grid item xs={12} container className={classes.alignRight}>
              <Button
                onClick={loadOutput}
                variant="contained"
                className={classes.buttonColor}
              >
                <span className={`${classes.whiteBtn} m-2`}>OK</span>
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
