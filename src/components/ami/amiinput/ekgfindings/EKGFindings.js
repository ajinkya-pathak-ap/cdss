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
              borderRadius: "10px",
            }}
            component="legend"
          >
            EKG findings(Select One)
          </FormLabel>
          <br />
          <div class="custom-control custom-radio custom-control-inline">
            <input
              className={classes.patientinfo}
              type="radio"
              id="rd_1"
              name="rd"
              class="custom-control-input green"
              value="Yes"
            />
            &nbsp;
            <label
              className={classes.patientinfolabelfont}
              class="custom-control-label"
              for="rd_1"
            >
              {modelDetails[0].modelInputKeyName}
            </label>
          </div>
          <br />

          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="rd_2"
              name="rd"
              class="custom-control-input red"
              value="No"
            />
            <label
              style={{ fontSize: "14px" }}
              class="custom-control-label"
              for="rd_2"
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
