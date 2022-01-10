import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { configurationService } from "../../../services/config-service";
import CircularIndeterminate from "../../../shared/preloder/Preloder";

import { AMIConfigStyles } from "./AmiConfigStyles";
import Display from "./display/Display";
import Generate from "./generate/Generate";
import Othersettings from "./others/OtherSettings";
import SaveConfig from "./saveconfig/SaveConfig";

export default function Amiconfig(props) {
  const [isFetching, setIsFetching] = useState(true);
  const [configData, setConfigData] = useState({});
  const [apply, setApply] = useState(true);

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };

  const classes = AMIConfigStyles();

  const fetchRequestObject = {
    OganizationId: 1,
    ModelId: 1,
  };

  useEffect(() => {
    fetchConfigData(fetchRequestObject);
  }, []);

  const fetchConfigData = (_config) => {
    if (props.localMode) {
      configurationService.getConfigurationLocal(_config).then(
        (response) => {
          setConfigData(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
          /**
           * error boundry
           */
        }
      );
    } else {
    }
  };
  /*************config api stuff***************/

  if (isFetching) {
    return <CircularIndeterminate />;
  } else {
    return (
      <Grid
        container
        item
        xs={12}
        lg={12}
        spacing={4}
        className={classes.holder}
      >
        <Grid item sm={12} xs={12}>
          <Box
            sx={{ bgcolor: "#6D7F9B" }}
            marginTop={1}
            paddingLeft={2}
            paddingRight={1}
            paddingTop={1}
          >
            <Grid container item xs={12} spacing={2}>
              <Generate config={configData.result}></Generate>
              <Display config={configData.result}></Display>
              <Othersettings config={configData.result}></Othersettings>
              <SaveConfig></SaveConfig>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
