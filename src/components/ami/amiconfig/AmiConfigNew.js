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

  //   const saveConfigData = (_config) => {
  //     if (props.localMode) {
  //       configurationService.saveConfiguration(_config).then(
  //         (response) => {},
  //         (error) => {
  //           return;
  //           /**
  //            * error boundry
  //            */
  //         }
  //       );
  //     } else {
  //     }
  //   };

  //   const saveStateValues = () => {
  //     /**generate rule-section */

  //     configData.result.configurations.forEach((item_0) => {
  //       if (item_0.ruleSectionName.toLocaleLowerCase() === "generate") {
  //         if (item_0.rules.length > 0) {
  //           /** if rules exists*/
  //           item_0.rules.forEach((item_1) => {
  //             if (generateRS === false) {
  //               /** if checkbox is not checked */
  //               item_1.isDefault = generateDefault;
  //               item_1.isChecked = generateRS;

  //               if (item_1.categories.length > 0) {
  //                 /**values exists for textfields */
  //                 item_1.categories[0].values = ageArr;
  //                 item_1.categories[0].operator = operatorOne;
  //                 item_1.categories[1].values = hstnlArr;
  //                 item_1.categories[1].operator = operatorTwo;
  //               } else {
  //                 /**values doesnt exists for textfields */
  //                 item_1.categories.push(ageValues);
  //                 item_1.categories.push(hstnlValues);
  //               }
  //             } else {
  //               /**if checkbox selected */
  //               item_1.categories = [];
  //             }
  //           });
  //         } else {
  //           /**no rules */
  //           if (generateRS === false) {
  //             /**checkbox not selected */
  //             item_0.rules[0].categories.push(ageValues);
  //             item_0.rules[0].categories.push(hstnlValues);
  //             item_0.rules[0].isDefault = generateDefault;
  //             item_0.rules[0].isChecked = generateRS;
  //           } else {
  //             /**checkbox selected */
  //             item_0.rules[0].isDefault = generateDefault;
  //             item_0.rules[0].isChecked = generateRS;
  //             item_0.rules[0].categories = [];
  //           }
  //         }
  //       } else if (item_0.ruleSectionName.toLocaleLowerCase() === "display") {
  //         if (item_0.rules.length > 0) {
  //           /** if rules exists*/
  //           item_0.rules.forEach((item_1) => {
  //             if (displayRS === false) {
  //               /** if checkbox is not checked */
  //               item_1.isDefault = displayDefault;
  //               item_1.isChecked = displayRS;
  //               if (item_1.categories.length > 0) {
  //                 /**values exists for textfields */
  //                 item_1.categories[0].values = [
  //                   `${displayRule.displayOne}%`.split("%")[0],
  //                   `${displayRule.displayTwo}%`.split("%")[0],
  //                 ];
  //                 item_1.categories[0].operator = "Between";
  //               } else {
  //                 /**values doesnt exists for textfields */
  //                 item_1.categories = displayValues;
  //               }
  //             } else {
  //               /**if checkbox selected */
  //               item_1.categories = [];
  //             }
  //           });
  //         } else {
  //           /**no rules */
  //           if (displayRS === false) {
  //             /**checkbox not selected */
  //             item_0.rules[0].categories[0].values = [
  //               `${displayRule.displayOne}%`.split("%")[0],
  //               `${displayRule.displayTwo}%`.split("%")[0],
  //             ];
  //             item_0.rules[0].isDefault = displayDefault;
  //             item_0.rules[0].isChecked = displayRS;
  //           } else {
  //             /**checkbox selected */
  //             item_0.rules[0].isDefault = generateDefault;
  //             item_0.rules[0].isChecked = generateRS;
  //             item_0.rules[0].categories = [];
  //           }
  //         }
  //       }
  //     });

  //     /**others settings */
  //     if (configData.result.configurations[2].rules.length) {
  //       configData.result.configurations[2].rules[0].isDefault = otherDefault;
  //       configData.result.configurations[2].rules[0].isChecked = otherRS;
  //       configData.result.configurations[2].rules[0].categories = otherArr;
  //     } else {
  //       configData.result.configurations[2].rules[0].categories[0] = [];
  //     }
  //   };
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
