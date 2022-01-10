import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "../../../../shared/material/mui";
import { Link } from "react-router-dom";
import { GuidanceStyles } from "./GuidanceStyles";

const Guidance = (props) => {
  const { guidance } = props.result;

  const guidanceTxt =
    "to view patient's position of your institution's Chest Pain Management Care Flowchart";

  const details = guidance.split("$");
  const classes = GuidanceStyles();

  return (
    <Grid container item xs={12}>
      <Grid container item xs={12} className={classes.gridcontainer3}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={`${classes.headerText}`}>
              Guidance
            </Typography>
            <Typography className={`${classes.headerTextThree}`}>
              {details[0]}
            </Typography>
            <Typography className={classes.typo}>{details[1]}</Typography>
            <Typography>
              <Link className={classes.hyperLink} to="/carepath">
                Click here
              </Link>
              &nbsp;
              <span className={classes.headerTextThree}>{guidanceTxt}</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Guidance;
