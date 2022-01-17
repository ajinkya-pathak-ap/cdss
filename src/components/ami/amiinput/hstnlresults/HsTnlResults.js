import React from "react";
import { Grid, Typography } from "../../../../shared/material/mui";
import { HsTnlResultsStyles } from "./HsTnlResultsStyles";
import { mlInputUtils } from "../AmiInutUtils";
import "../styles.css";

const HsTnlResults = (props) => {
  const classes = HsTnlResultsStyles();

  const onInputChange = () => {};
  return (
    <form className={classes.secondform}>
      <Grid
        container
        className={classes.formgrop}
        style={{ marginTop: "14px", borderRadius: "4px" }}
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
            <Typography className={classes.firstdraw}>
              {mlInputUtils.hstnlHeadings[0]}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <input
              type="email"
              className={`form-control ${classes.firstinputspace}`}
              value={
                props.result.troponins[0].value
                  ? `${props.result.troponins[0].value}${props.result.troponins[0].units}`
                  : "ng/L"
              }
              onChange={onInputChange}
            ></input>
          </Grid>
          <Grid item xs={6} md={5}>
            <input
              type="email"
              className={`form-control ${classes.firstinputspace2}`}
              value={
                props.result.troponins[0].resultDateTime
                  ? mlInputUtils.convertDate(
                      props.result.troponins[0].resultDateTime
                    )
                  : "mm/dd/yy,hh:mm"
              }
              onChange={onInputChange}
            ></input>
          </Grid>

          <Grid container item xs={12} md={4}>
            <Typography className={classes.seconddrawtypo}>
              {mlInputUtils.hstnlHeadings[1]}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <input
              type="email"
              className={`form-control ${classes.secondinputspace1}`}
              value={
                props.result.troponins[1]
                  ? `${props.result.troponins[1].value}${props.result.troponins[1].units}`
                  : "ng/L"
              }
              onChange={onInputChange}
            ></input>
          </Grid>
          <Grid item xs={6} md={5}>
            <input
              type="email"
              className={`form-control ${classes.secondinputspace2}`}
              onChange={onInputChange}
              value={
                props.result.troponins[1]
                  ? mlInputUtils.convertDate(
                      props.result.troponins[1].resultDateTime
                    )
                  : "mm/dd/yy,hh:mm"
              }
            ></input>
          </Grid>

          <Grid container item xs={12} md={4}>
            <Typography className={classes.thirddrawtypo}>
              {mlInputUtils.hstnlHeadings[2]}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <input
              type="email"
              className={`form-control ${classes.thirdinputspace1}`}
              value={
                props.result.troponins[2]
                  ? `${props.result.troponins[2].value}${props.result.troponins[2].units}`
                  : "ng/L"
              }
              onChange={onInputChange}
            ></input>
          </Grid>
          <Grid item xs={6} md={5}>
            <input
              type="email"
              className={`${classes.thirdinputspace2} form-control`}
              value={
                props.result.troponins[2]
                  ? mlInputUtils.convertDate(
                      props.result.troponins[2].resultDateTime
                    )
                  : "mm/dd/yy,hh:mm"
              }
              onChange={onInputChange}
            ></input>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </form>
  );
};

export default HsTnlResults;
