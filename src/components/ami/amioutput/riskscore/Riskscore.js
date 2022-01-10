import { React } from "react";
import { Grid, Box } from "../../../../shared/material/mui";
import { Card, CardContent, Typography } from "@material-ui/core";
import { RiskScoreStyles } from "./RiskscoreStyles";
import { utils } from "../AmiOutputUtils";

const Riskscore = (props) => {
  const classes = RiskScoreStyles();
  const { riskScoreDetails, probabilityRange, score } = props.result;

  const details = riskScoreDetails.split("$");

  return (
    <Grid container item xs={12}>
      <Grid item xs={8} className={classes.gridcontainer1}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={`${classes.headerText}`}>
              Risk Score
            </Typography>
            <Typography className={`${classes.headerText}`}>
              {details[0]}
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              {details[1]}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item xs={4} className={classes.gridcontainer1}>
        <Box textAlign="center" className={classes.smallMargin}>
          <Typography alignitems="center" className={classes.riskScoreShell}>
            {utils.riskScoreRange(probabilityRange)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Riskscore;
