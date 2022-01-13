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
  const [configDataCopy, setConfigDataCopy] = useState({});

  const [resetClick, setResetClick] = useState(false);

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
          setConfigDataCopy(response.data);
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
      configurationService.getConfiguration(_config).then(
        (response) => {
          setConfigData(response.data);
          setConfigDataCopy(response.data);
          setIsFetching(false);
        },
        (error) => {
          return;
          /**
           * error boundry
           */
        }
      );
    }
  };

  const saveConfigData = (_config) => {
    props.notify({
      message: "Rules Applied Successfully...",
      type: "success",
    });

    if (props.localMode) {
      // configurationService.saveConfigurationLocal(_config).then(
      //   (response) => {},
      //   (error) => {
      //     return;
      //   }
      // );
    } else {
      configurationService.saveConfiguration(_config).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          return;
        }
      );
    }
  };

  const addApplyFlag = () => {
    // console.log(configDataCopy.result);
    saveConfigData(configDataCopy.result);
  };

  const resetBtnClick = () => {
    setResetClick(true);
  };
  const resetAcknowledge = () => {
    setResetClick(false);
  };

  const rulesData = (_obj, _ruleName) => {
    configDataCopy.result.configurations.forEach(
      (configurationsItem, index) => {
        if (
          configurationsItem.ruleSectionName.toLocaleLowerCase() === _ruleName
        ) {
          configurationsItem = _obj;
        }
      }
    );

    // console.log(`${_ruleName}...`, configDataCopy.result);
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
              <Generate
                config={configData.result}
                resetFlag={resetClick}
                resetAck={resetAcknowledge}
                getData={rulesData}
              ></Generate>
              <Display
                config={configData.result}
                resetFlag={resetClick}
                resetAck={resetAcknowledge}
                getData={rulesData}
              ></Display>
              <Othersettings
                config={configData.result}
                resetFlag={resetClick}
                resetAck={resetAcknowledge}
                getData={rulesData}
              ></Othersettings>

              <SaveConfig
                addApplyFlag={addApplyFlag}
                resetAll={resetBtnClick}
              ></SaveConfig>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
