import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Card, CardContent, Typography, FormControl } from "@material-ui/core";
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

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  const [apply, setApply] = useState(true);

  const handleDisplayRuleCheck = (event) => {
    const checkedValue = event.target.checked;
    setDisplayRS(checkedValue);
    setDisplayDefault(false);
    checkedValue ? setApply(false) : setApply(true);
  };

  const handleDisplayRule = (e) => {
    setRiskScoreRule({ ...riskScoreRule, [e.target.name]: e.target.value });
    setDisplayArr([
      `${riskScoreRule.displayOne}%`.split("%")[0],
      `${riskScoreRule.displayTwo}%`.split("%")[0],
    ]);
    setDisplayValues({
      ...displayValues,
      values: displayArr,
    });
  };

  const mapJsonResponse = (_obj) => {
    debugger;
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
            if (ruleIteam.categories.length > 0) {
              ruleIteam.categories.forEach((categoryItem, ind) => {
                /**create values categories */
                if (categoryItem.values.length > 0) {
                  /**non-empty values */
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
        }
      }
    });
  };

  const saveStateValues = () => {
    if (displayRule.rules.length > 0) {
      /** rules available already*/
      displayRule.rules.forEach((ruleItem) => {
        if (displayRS === false) {
          /***save the values if checkbox is not selected*/
          ruleItem.isDefault = displayDefault;
          ruleItem.isChecked = displayRS;
          if (ruleItem.categories.length > 0) {
            /*check for the multiple categories */
            ruleItem.categories.forEach((categoryItem) => {
              categoryItem.values = displayArr;
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
        }
      });
    } else {
      /**no rules available */
      if (displayRS === false) {
        /**checkbox not selected */
        displayRule.rules.categories.push(displayValues);
        displayRule.rules.isDefault = displayDefault;
        displayRule.rules.isChecked = displayRS;
      } else {
        /**checkbox selected */
        displayRule.rules.isDefault = displayDefault;
        displayRule.rules.isChecked = displayRS;
        displayRule.rules.categories = [];
      }
    }
    props.popUp(displayRule);
  };

  const displayValue = () => {
    saveStateValues();
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
              }}
            >
              <BootstrapInput
                style={{
                  width: "80px",
                  textAlign: "right",
                }}
                // defaultValue="0%"
                disabled={displayRS}
                id="rangeOne"
                name="displayOne"
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
              <BootstrapInput
                style={{
                  marginLeft: "-20px",
                  width: "80px",
                }}
                // defaultValue="1%"
                disabled={displayRS}
                id="rangeTwo"
                name="displayTwo"
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
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleDisplayRuleCheck(e)}
                  {...utils.properties.label}
                  defaultChecked={displayRS}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label="Display All Risk Scores"
            />
            <br />
            <br />
            <Typography
              style={{ fontSize: "19px", paddingLeft: "10%" }}
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
            <button onClick={displayValue}>Display Values</button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Display;
