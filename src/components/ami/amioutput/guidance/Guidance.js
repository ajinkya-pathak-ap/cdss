import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import { GuidanceStyles } from "./GuidanceStyles";

const Guidance = () => {
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
              {/* {guidance.text_1} */}
              institution, the following course of action is recommended
            </Typography>
            <Typography className={classes.typo}>
              institution, the following course of action is recommended
              {/* {guidance.text_2} */}
            </Typography>
            <Typography>
              <Link className={classes.hyperLink} to="/carepath">
                Click here
              </Link>
              &nbsp;
              <span className={classes.headerTextThree}>
                to view patient's position of your institution's Chest Pain
                Management Care Flowchart
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Guidance;
