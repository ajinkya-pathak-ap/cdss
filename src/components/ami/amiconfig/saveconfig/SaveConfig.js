import React from "react";
import Grid from "@material-ui/core/Grid";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { saveConfigBtns, SaveConfigStyles } from "./SaveConfigStyles";

const BootstrapButton = saveConfigBtns;

const SaveConfig = (props) => {
  const classes = SaveConfigStyles();

  const applySetings = () => {
    // saveStateValues();
    // console.log("..configData..", configData.result);
    // saveConfigData(postRequestObject);
  };

  return (
    <Grid item xs={12} container className={classes.alignRight}>
      <Grid item xs={12} md={4}>
        <Stack spacing={2} direction="row" justifyContent="end">
          <BootstrapButton
            style={{ marginLeft: "10px" }}
            variant="contained"
            className={classes.buttonColor}
            onClick={applySetings}
            // disabled={apply}
          >
            Apply
          </BootstrapButton>
          <BootstrapButton variant="contained" className={classes.buttonColor}>
            Reset
          </BootstrapButton>
          <BootstrapButton variant="contained" className={classes.buttonColor}>
            <Link className={classes.buttonColor} to="/amioutput">
              <span className="m-2">Close</span>
            </Link>
          </BootstrapButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SaveConfig;
