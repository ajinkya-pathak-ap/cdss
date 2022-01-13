import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { HsTnlResultsStyles } from "./HsTnlResultsStyles";

import "../styles.css";
import { mlInputUtils } from "../AmiInutUtils";

const HsTnlResults = (props) => {
  const classes = HsTnlResultsStyles();

  const convertDate = (_date) => {
    let dateTimeArr = _date.split("T"),
      date = dateTimeArr[0],
      hrsTemp = dateTimeArr[1].split(":"),
      hrs = `${hrsTemp[0]}:${hrsTemp[1]}`;
    return `${date},${hrs}`;
  };
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
              // inputProps={{
              //   className: classes.inputFields,
              // }}
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
              // inputProps={{
              //   className: classes.inputFields,
              // }}
              value={
                props.result.troponins[0].resultDateTime
                  ? convertDate(props.result.troponins[0].resultDateTime)
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
              // inputProps={{
              //   className: classes.inputFields,
              // }}
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
              // inputProps={{
              //   className: classes.inputFields,
              // }}
              onChange={onInputChange}
              value={
                props.result.troponins[1]
                  ? convertDate(props.result.troponins[1].resultDateTime)
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
              // inputProps={{
              //   className: classes.inputFields,
              // }}
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
              // inputProps={{
              //   className: classes.inputFields,
              // }}
              value={
                props.result.troponins[2]
                  ? convertDate(props.result.troponins[2].resultDateTime)
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
