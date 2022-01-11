import React from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@mui/material/FormLabel";
import { FormControl } from "@material-ui/core";
import { EKGFindingsStyles } from "./EKGFindingStyles";
import FormGroup from "@mui/material/FormGroup";

import "../styles.css";

const EKGFindings = () => {
  const classes = EKGFindingsStyles();
  return (
    <Grid item xs={12} md={12} className={classes.ekgfindingscont2}>
      <FormGroup className={classes.formgrop}>
        <FormControl component="fieldset">
          <FormLabel
            className={classes.ekgformlabel}
            style={{
              textAlign: "left",
              fontSize: "18px",
              color: "#fff",
              fontWeight: "800",
            }}
            component="legend"
          >
            EKG findings(Select One)
          </FormLabel>
          <br />
          <div className={`custom-control custom-radio custom-control-inline`}>
            <input
              className={`custom-control-input green ${classes.patientinfo}`}
              style={{}}
              type="radio"
              id="rd_1"
              name="rd"
              value="Yes"
            />
            &nbsp;
            <label
              className={`custom-control-label ${classes.patientinfolabelfont}`}
              for="rd_1"
            >
              {/* ST deviation, but LBBB, LVH, repolarization changes */}
              {/* {patientInfo.value.modelDetails[0].modelInputKeyName} */}
            </label>
          </div>
          <br />

          <div className={`custom-control custom-radio custom-control-inline`}>
            <input
              type="radio"
              id="rd_2"
              name="rd"
              className={`custom-control-input red`}
              value="No"
            />
            <label
              style={{ fontSize: "14px" }}
              className={`custom-control-label`}
              for="rd_2"
            >
              &nbsp;
              {/* No ST deviation, but LBBB, LVH, repolarization changes */}
              {/* {patientInfo.value.modelDetails[1].modelInputKeyName} */}
            </label>
          </div>
        </FormControl>
      </FormGroup>
    </Grid>
  );
};

export default EKGFindings;
