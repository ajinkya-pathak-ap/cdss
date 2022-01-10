import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { HsTnlResultsStyles } from "./HsTnlResultsStyles";

import "../styles.css";

const HsTnlResults = () => {
  const classes = HsTnlResultsStyles();
  return (
    <form className={classes.secondform}>
      <Grid
        container
        className={classes.formgrop}
        style={{ marginTop: "14px" }}
      >
        <Grid
          container
          style={{
            marginTop: "10px",
            marginBottom: "8px",
          }}
          spacing={2}
        >
          <Grid item xs={6} md={6}>
            <Typography
              variant="h6"
              style={{
                fontWeight: "700",
                marginLeft: "17px",
              }}
            >
              hsTnl Results
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography variant="h6" className={classes.drawtime}>
              Draw Time
            </Typography>
          </Grid>

          <Grid container item xs={12} md={4}>
            <Typography className={classes.firstdraw}>First draw</Typography>
          </Grid>
          <Grid xs={6} md={4}>
            <input
              type="email"
              class="form-control"
              className={classes.firstinputspace}
              inputProps={{
                className: classes.inputFields,
              }}
            ></input>
          </Grid>
          <Grid xs={6} md={4}>
            <input
              type="email"
              class="form-control"
              className={classes.firstinputspace2}
              inputProps={{
                className: classes.inputFields,
              }}
            ></input>
          </Grid>
          <Grid container item xs={12} md={4}>
            <Typography className={classes.seconddrawtypo}>
              Second draw
            </Typography>
          </Grid>
          <Grid xs={6} md={4}>
            <input
              type="email"
              class="form-control"
              className={classes.secondinputspace1}
              inputProps={{
                className: classes.inputFields,
              }}
            ></input>
          </Grid>
          <Grid xs={6} md={4}>
            <input
              type="email"
              class="form-control"
              className={classes.secondinputspace2}
              inputProps={{
                className: classes.inputFields,
              }}
            ></input>
          </Grid>
          <Grid container item xs={12} md={4}>
            <Typography className={classes.thirddrawtypo}>
              Third draw
            </Typography>
          </Grid>
          <Grid xs={6} md={4}>
            <input
              type="email"
              class="form-control"
              className={classes.thirdinputspace1}
              inputProps={{
                className: classes.inputFields,
              }}
            ></input>
          </Grid>
          <Grid xs={6} md={4}>
            <input
              type="email"
              class="form-control"
              className={classes.thirdinputspace2}
              inputProps={{
                className: classes.inputFields,
              }}
            ></input>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </form>
  );
};

export default HsTnlResults;
