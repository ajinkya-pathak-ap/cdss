import React from "react";
import { Grid, Stack } from "../../../../shared/material/mui";
import { AcknowledgeStyles, BootstrapButton } from "./AcknowledgeStyles";

export const Acknowledge = () => {
  const classes = AcknowledgeStyles();

  return (
    <Grid item xs={12} container className={classes.alignRight}>
      <Stack spacing={2} direction="row" container>
        <BootstrapButton
          variant="contained"
          className={`${classes.buttonColor} ${classes.acknowledgeBtn_1}`}
        >
          <span className={`${classes.buttonColor} m-1`}>
            Acknowledge(Document Risk Contributors)
          </span>
        </BootstrapButton>
        <BootstrapButton
          variant="contained"
          className={`${classes.buttonColor} ${classes.acknowledgeBtn_2}`}
        >
          <span className={`${classes.buttonColor} m-1`}>Acknowledge</span>
        </BootstrapButton>
        <BootstrapButton variant="contained" className={classes.buttonColor1}>
          <span className="m-1">Close</span>
        </BootstrapButton>
      </Stack>
    </Grid>
  );
};
