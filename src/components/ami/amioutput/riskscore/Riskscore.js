import { React } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { RiskScoreStyles } from "./RiskscoreStyles";
import { utils } from "../../amiconfig/AmiConfigUtils";

const Riskscore = (props) => {
  const classes = RiskScoreStyles();
  const { riskScoreDetails, probabilityRange, score } = props.result;

  const details = riskScoreDetails.split("$");

  const riskScoreRange = () => {
    let probRange = probabilityRange;
    probRange = probRange.replace("(", "");
    probRange = probRange.replace(")", "");
    probRange = probRange.replace(",", " -");
    return probRange;
  };

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
            {riskScoreRange()}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Riskscore;
