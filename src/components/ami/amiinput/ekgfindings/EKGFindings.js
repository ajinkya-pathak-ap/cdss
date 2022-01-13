import React from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@mui/material/FormLabel";
import { FormControl } from "@material-ui/core";
import { EKGFindingsStyles } from "./EKGFindingStyles";
import FormGroup from "@mui/material/FormGroup";

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
              textAlign: "justify",
            }}
            component="legend"
          >
            EKG Findings(Select One)
          </FormLabel>

          <ul className="list-group">
            <li
              className={`${classes.firstradioindent} list-group-item`}
              className="list-group-item"
              style={{
                textIndent: "-20px",
                listStyleType: "none",
                marginLeft: "-25px",
                fontSize: "15px",
              }}
            >
              <input
                className="makeStyles-patientinfo-21 custom-control-input green"
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
              <label
                className={`${classes.patientinfolabelfont} custom-control-label`}
                htmlFor="rd_1"
              >
                {modelDetails[0].modelInputKeyName}
              </label>
            </li>
            <br />
            <li
              className="list-group-item"
              style={{
                textIndent: "-22px",
                listStyleType: "none",
                marginLeft: "-25px",
                fontSize: "15px",
              }}
            >
              <input
                className="makeStyles-patientinfo-21 custom-control-input green"
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
                {modelDetails[1].modelInputKeyName}
              </label>
            </li>
          </ul>
        </FormControl>
      </FormGroup>
    </Grid>
  );
};

export default EKGFindings;
