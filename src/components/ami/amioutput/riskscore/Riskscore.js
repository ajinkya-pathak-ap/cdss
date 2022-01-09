import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { RiskScoreStyles } from "./RiskscoreStyles";

const Riskscore = (props) => {
  const classes = RiskScoreStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={8} className={classes.gridcontainer1}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={`${classes.headerText}`}>
              Risk Score
            </Typography>
            <Typography className={`${classes.headerText}`}>
              {/* {details.text_1} */}
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              {/* {details.text_2} */}
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
          <Typography alignitems="center" className={classes.riskScoreShell}>
            {/* {riskScoreRange()} */}
            {/* {riskScore.result.score} */}
            0% t0 10%
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Riskscore;
