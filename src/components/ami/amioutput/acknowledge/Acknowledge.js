import React from "react";
import { Grid, Stack } from "../../../../shared/material/mui";
import { Link, useNavigate } from "react-router-dom";
import { AcknowledgeStyles, BootstrapButton } from "./AcknowledgeStyles";

export const Acknowledge = () => {
  const classes = AcknowledgeStyles();
  const history = useNavigate();

  return (
    <Grid item xs={12} container className={classes.alignRight}>
      <Stack spacing={2} direction="row" container>
        <BootstrapButton
          variant="contained"
          className={`${classes.buttonColor} ${classes.acknowledgeBtn_1}`}
        >
          <Link className={classes.buttonColor} to="">
            <span className="m-1">Acknowledge(Document Risk Contributors)</span>
          </Link>
        </BootstrapButton>
        <BootstrapButton
          variant="contained"
          className={`${classes.buttonColor} ${classes.acknowledgeBtn_2}`}
        >
          <Link className={classes.buttonColor} to="">
            <span className="m-1">Acknowledge</span>
          </Link>
        </BootstrapButton>
        <BootstrapButton variant="contained" className={classes.buttonColor1}>
          {/* <Link className={classes.buttonColor1} to="/amioutput"> */}
            <span className="m-1">Close</span>
          {/* </Link> */}
        </BootstrapButton>
      </Stack>
    </Grid>
  );
};
