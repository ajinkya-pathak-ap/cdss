import React from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@mui/material/FormLabel";
import { FormControl } from "@material-ui/core";
import { EKGFindingsStyles } from "./EKGFindingStyles";
import FormGroup from "@mui/material/FormGroup";

import "../styles.css";

const EKGFindings = (props) => {
  const classes = EKGFindingsStyles();
  const { modelDetails } = props.result;
  return (
    <Grid item xs={12} md={12} className={classes.ekgfindingscont2}>
      <FormGroup className={classes.formgrop}>
        <FormControl component="fieldset">
          <FormLabel
            className={classes.ekgformlabel}
            style={{
              textAlign: "left",
              fontSize: "20px",
              color: "#fff",
              fontWeight: "800",
              paddingTop: "11px",
            }}
            component="legend"
          >
            EKG Findings(Select One)
          </FormLabel>
          <br />

          <div className={`custom-control custom-radio custom-control-inline`}>
            <input
              className={`${classes.patientinfo} custom-control-input green`}
              type="radio"
              id="rd_1"
              name="rd"
              defaultChecked={modelDetails[0].modelInputValue}
              value={
                modelDetails[0].modelInputValue
                  ? modelDetails[0].modelInputValue
                  : ""
              }
            />
            &nbsp;
            <label
              className={`${classes.patientinfolabelfont} custom-control-label`}
              htmlFor="rd_1"
            >
              {modelDetails[0].modelInputKeyName}
            </label>
          </div>
          <br />
          <div className={`custom-control custom-radio custom-control-inline`}>
            <input
              type="radio"
              id="rd_2"
              name="rd"
              defaultChecked={modelDetails[1].modelInputValue}
              className={`custom-control-input red`}
              value={
                modelDetails[1].modelInputValue
                  ? modelDetails[1].modelInputValue
                  : ""
              }
            />
            <label
              className={`${classes.patientinfolabelfont} custom-control-label`}
              htmlFor="rd_2"
            >
              &nbsp; {modelDetails[1].modelInputKeyName}
            </label>
          </div>
        </FormControl>
      </FormGroup>
    </Grid>
  );
};

export default EKGFindings;
