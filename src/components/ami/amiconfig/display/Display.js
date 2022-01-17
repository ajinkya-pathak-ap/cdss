import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Checkbox,
  TextField,
  FormControlLabel,
} from "../../../../shared/material/mui";
import { FormControl } from "@material-ui/core";
import { DisplayStyles, displayRuleInput } from "./DisplayStyles";
import { utils } from "../AmiConfigUtils";

const BootstrapInput = displayRuleInput;

const Display = (props) => {
  const classes = DisplayStyles();
  const { configurations } = props.config;
  let displayUtils = utils.properties.displayRule;

  const [displayRS, setDisplayRS] = useState(true);
  const [displayDefault, setDisplayDefault] = useState(true);
  const [displayArr, setDisplayArr] = useState([]);
  const [displayRule, setDisplayRule] = useState({});
  const [riskScoreRule, setRiskScoreRule] = useState(
    displayUtils.displayValues
  );

  const [displayValues, setDisplayValues] = useState(
    displayUtils.defaultDisplay
  );

  let tempDisplayObj = displayUtils.displayValues,
    tempDefault = displayUtils.displayDefault;

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  useEffect(() => {
    if (props.resetFlag) {
      resetFields();
    }
  }, [props.resetFlag]);

  const resetFields = () => {
    setRiskScoreRule(displayUtils.displayValues);
    setDisplayRS(true);
    setDisplayDefault(true);

    props.resetAck();
  };

  const [apply, setApply] = useState(true);

  const handleDisplayRuleCheck = (event) => {
    const checkedValue = event.target.checked;
    // setDisplayRS(checkedValue);
    setDisplayDefault(checkedValue);
    tempDefault.default = checkedValue;

    checkedValue ? setApply(false) : setApply(true);

    props.getData(saveStateValues(), "display");
  };

  const handleDisplayRule = (e) => {
    setRiskScoreRule({ ...riskScoreRule, [e.target.name]: e.target.value });

    if (e.target.name === "displayOne") {
      tempDisplayObj.displayOne = e.target.value;
    } else {
      tempDisplayObj.displayTwo = e.target.value;
    }

    setDisplayArr([
      `${riskScoreRule.displayOne}%`.split("%")[0],
      `${riskScoreRule.displayTwo}%`.split("%")[0],
    ]);

    setDisplayValues({
      ...displayValues,
      // values: displayArr,
      values: getDisplayArray(),
    });

    props.getData(saveStateValues(), "display");
  };

  const getDisplayArray = () => {
    return [tempDisplayObj.displayOne, tempDisplayObj.displayTwo];
  };

  const mapJsonResponse = (_obj) => {
    _obj.forEach((configurationsItem, index) => {
      if (
        configurationsItem.ruleSectionName.toLocaleLowerCase() === "display"
      ) {
        setDisplayRule(configurationsItem);
        if (configurationsItem.rules.length > 0) {
          /**create rules dom here */
          configurationsItem.rules.forEach((ruleIteam) => {
            /**declare default & checked */
            setDisplayDefault(ruleIteam.isDefault);
            setDisplayRS(ruleIteam.isChecked);
            tempDefault.default = ruleIteam.isDefault;

            if (ruleIteam.categories.length > 0) {
              ruleIteam.categories.forEach((categoryItem, ind) => {
                /**create values categories */
                if (categoryItem.values.length > 0) {
                  /**non-empty values */
                  // setDisplayRS(false);
                  setDisplayDefault(false);
                  tempDefault.isDefault = false;
                  setDisplayArr(categoryItem.values);
                  if (categoryItem.values.length > 1) {
                    setRiskScoreRule({
                      ...riskScoreRule,
                      displayOne: categoryItem.values[0],
                      displayTwo: categoryItem.values[1],
                    });
                  } else {
                    setRiskScoreRule({
                      ...riskScoreRule,
                      displayOne: categoryItem.values[0],
                    });
                  }
                } else {
                  /**empty values */
                  setDisplayArr([]);
                }
              });
            }
          });
        } else {
          /**empty rule */
          setDisplayDefault(true);
          tempDefault.isDefault = true;
          setDisplayRS(true);
        }
      }
    });
  };

  const saveStateValues = () => {
    if (displayRule.rules.length > 0) {
      /** rules available already*/
      displayRule.rules.forEach((ruleItem) => {
        // if (displayDefault === false) {
        if (tempDefault.default === false) {
          /***save the values if checkbox is not selected*/
          // ruleItem.isDefault = displayDefault;
          ruleItem.isDefault = tempDefault.default;
          ruleItem.isChecked = displayRS;
          if (ruleItem.categories.length > 0) {
            /*check for the multiple categories */
            ruleItem.categories.forEach((categoryItem) => {
              // categoryItem.values = displayArr;
              categoryItem.values = getDisplayArray();
            });
          } else {
            /**values doesnt exists for textfields */
            ruleItem.categories.push(displayValues);
          }
        } else {
          /**
           * send empty values when checkbox is checked
           */
          ruleItem.categories = [];
          ruleItem.isDefault = tempDefault.default;
          ruleItem.isChecked = displayRS;
        }
      });
    } else {
      /**no rules available */
      // if (displayDefault === false) {
      if (tempDefault.default === false) {
        /**checkbox not selected */
        displayRule.rules.categories.push(displayValues);
        // displayRule.rules.isDefault = displayDefault;
        displayRule.rules.isDefault = tempDefault.default;
        displayRule.rules.isChecked = displayRS;
      } else {
        /**checkbox selected */
        // displayRule.rules.isDefault = displayDefault;
        displayRule.rules.isDefault = tempDefault.default;
        displayRule.rules.isChecked = displayRS;
        displayRule.rules.categories = [];
      }
    }
    return displayRule;
  };

  const createDisplayRule = () => {
    let response = (
      <Grid container spacing={2}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={1} className={classes.betweenspacing}>
            <Typography variant={"h6"} style={{ marginLeft: "10px" }}>
              Between
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <FormControl
              variant="standard"
              style={{
                marginLeft: "28px",
                height: "35px",
              }}
            >
              <TextField
                style={{
                  backgroundColor: "#fff",
                  width: "85px",
                  borderRadius: "4px",
                }}
                disabled={displayDefault}
                id="rangeOne"
                size="small"
                name="displayOne"
                className={classes.hstnlelsevalue1}
                onChange={handleDisplayRule}
                type="number"
                value={
                  riskScoreRule.displayOne ? riskScoreRule.displayOne : "0%"
                }
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            style={{
              marginLeft: "50px",
            }}
          >
            <Typography variant={"h6"}>And</Typography>
          </Grid>
          <Grid item xs={12} md={1} className={classes.spacing}>
            <FormControl variant="standard">
              <TextField
                style={{
                  marginLeft: "-24px",
                  backgroundColor: "#fff",
                  width: "85px",
                  borderRadius: "4px",
                }}
                disabled={displayDefault}
                id="rangeTwo"
                size="small"
                name="displayTwo"
                // disabled={generateRS}
                className={classes.hstnlelsevalue1}
                onChange={handleDisplayRule}
                type="number"
                value={
                  riskScoreRule.displayTwo ? riskScoreRule.displayTwo : "1%"
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant={"h6"}
              style={{
                marginLeft: "5px",
                fontSize: "18px",
              }}
            >
              risk of MACE within 30 days
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    );
    return response;
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={12} className={classes.gridcontainer1}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={classes.headerText}>
              Display Risk Score for only Patients meeting the following
              criteria
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleDisplayRuleCheck}
                  {...utils.properties.label}
                  checked={displayDefault}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label="Display ALL Risk Scores"
            />
            <br />
            <br />
            <Typography
              style={{ fontSize: "19px", paddingLeft: "6%" }}
              className={classes.headerText}
            >
              Or
            </Typography>
            <br />
            <Typography
              style={{
                textAlign: "left",
              }}
              className={classes.headerText}
            >
              User Defined Range
            </Typography>
            <br />
            {createDisplayRule()}
            {/* <button onClick={displayValue}>Display Values</button> */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Display;
