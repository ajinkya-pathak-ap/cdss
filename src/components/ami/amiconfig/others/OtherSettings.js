import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
} from "../../../../shared/material/mui";
import FormGroup from "@mui/material/FormGroup";
import { OtherSettingStyles } from "./OtherSettingStyles";
import { utils } from "../AmiConfigUtils";

const Othersettings = (props) => {
  const classes = OtherSettingStyles();
  let otherUtils = utils.properties.otherRule;
  const { configurations } = props.config;

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  useEffect(() => {
    if (props.resetFlag) {
      resetFields();
    }
  }, [props.resetFlag]);

  const [otherRS, setOtherRS] = useState(true);
  const [otherDefault, setOtherDefault] = useState(true);
  const [otherArr, setOtherArr] = useState([]);
  const [otherRule, setOtherRule] = useState({});
  const [otherValue, setOtherValue] = useState(otherUtils.otherValues);

  let tempDefault = otherUtils.displayDefault;

  const resetFields = () => {
    setOtherRS(true);
    setOtherDefault(true);
    props.resetAck();
  };

  const mapJsonResponse = (_obj) => {
    _obj.forEach((configurationsItem, index) => {
      if (configurationsItem.ruleSectionName.toLocaleLowerCase() === "other") {
        setOtherRule(configurationsItem);
        if (configurationsItem.rules.length > 0) {
          /**non-emprty rule */
          configurationsItem.rules.forEach((ruleItem) => {
            setOtherDefault(ruleItem.isDefault);
            setOtherRS(ruleItem.isChecked);
            tempDefault.default = ruleItem.isDefault;
            if (ruleItem.categories.length > 0) {
              ruleItem.categories.forEach((categoryItem, ind) => {
                /**create values categories */
                setOtherArr(categoryItem);
              });
            } else {
              /**empty category */
              ruleItem.categories = [];
            }
          });
        } else {
          setOtherDefault(true);
          tempDefault.default = true;
          setOtherRS(true);
        }
      } else {
      }
    });
  };

  const saveStateValues = () => {
    if (otherRule.rules.length > 0) {
      /** rules available already*/
      otherRule.rules.forEach((ruleItem) => {
        // if (otherRS === false) {
        if (tempDefault.default === false) {
          /***save the values if checkbox is not selected*/
          // ruleItem.isDefault = otherDefault;
          ruleItem.isDefault = tempDefault.default;
          ruleItem.isChecked = otherRS;
          if (ruleItem.categories.length > 0) {
            /*check for the multiple categories */
            ruleItem.categories.forEach((categoryItem) => {
              ruleItem.categories = [];
            });
          } else {
            /**values doesnt exists for textfields */
            ruleItem.categories = [];
          }
        } else {
          /**
           * send empty values when checkbox is checked
           */
          ruleItem.categories = [];
          ruleItem.isDefault = tempDefault.default;
          ruleItem.isChecked = otherRS;
        }
      });
    } else {
      /**no rules available */
      // if (otherRS === false) {
      if (tempDefault.default === false) {
        /**checkbox not selected */
        otherRule.rules.categories = [];
        // otherRule.rules.isDefault = otherDefault;
        otherRule.rules.isDefault = tempDefault.default;
        otherRule.rules.isChecked = otherRS;
      } else {
        /**checkbox selected */
        // otherRule.rules.isDefault = otherDefault;
        otherRule.rules.isDefault = tempDefault.default;
        otherRule.rules.isChecked = otherRS;
        otherRule.rules.categories = [];
      }
    }
    return otherRule;
  };

  const otherCheckbox = (event) => {
    const checkedValue = event.target.checked;
    // setOtherRS(checkedValue);
    setOtherDefault(checkedValue);
    tempDefault.default = checkedValue;
    props.getData(saveStateValues(), "other");
  };

  const applyOtherRule = () => {
    saveStateValues();
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.gridcontainer}>
        <CardContent>
          <Typography className={classes.headerText}>Other Settings</Typography>
          <FormGroup className={`${classes.formgrop} ${classes.headerText}`}>
            <FormControlLabel
              control={
                <Checkbox
                  {...utils.properties.label}
                  checked={otherDefault}
                  onChange={(e) => otherCheckbox(e)}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                      fontSize: "35px",
                    },
                  }}
                />
              }
              label="Share de-identified data and results with Beckman Coulter "
            />
          </FormGroup>
        </CardContent>
        {/* <button onClick={applyOtherRule}>Apply Other</button> */}
      </Card>
    </Grid>
  );
};

export default Othersettings;
