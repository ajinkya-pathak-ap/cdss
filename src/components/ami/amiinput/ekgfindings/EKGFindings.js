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
              fontSize: "18px",
              color: "#fff",
              fontWeight: "800",
            }}
            component="legend"
          >
            EKG findings(Select One)
          </FormLabel>
          <br />

          {modelDetails.map((v, i) => (
            <div
              className={`custom-control custom-radio custom-control-inline`}
            >
              <input
                className={`custom-control-input green ${classes.patientinfo}`}
                type="radio"
                id={`rd_${i}`}
                name={`rd_${i}`}
                value={v.modelInputValue ? "Yes" : "No"}
              />
              &nbsp;
              <label
                className={`custom-control-label ${classes.patientinfolabelfont}`}
                for={`rd_${i}`}
              >
                {v.modelInputKeyName}
              </label>
            </div>
          ))}
        </FormControl>
      </FormGroup>
    </Grid>
  );
};

export default EKGFindings;
