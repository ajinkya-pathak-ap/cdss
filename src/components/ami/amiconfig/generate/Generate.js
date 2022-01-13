import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Select,
  TextField,
} from "../../../../shared/material/mui";

import { FormControl } from "@material-ui/core";
import { GenerateStyles } from "./GenerateStyles";
import { utils } from "../AmiConfigUtils";

const Generate = (props) => {
  const classes = GenerateStyles();
  let generateUtils = utils.properties.generateRule;
  const { configurations } = props.config;

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  const [ageArr, setAgeArr] = useState([]);
  const [generateRule, setGenerateRule] = useState({});
  const [generateRS, setGenerateRS] = useState(true);
  const [generateDefault, setGenrateDefault] = useState(true);
  const [operatorOne, setOperatorOne] = useState("");
  const [operatorTwo, setOperatorTwo] = useState("");
  const [hstnlArr, setHstnlArr] = useState([]);

  const [ageRule, setAgeRule] = useState(generateUtils.ageRule);
  const [troponinRule, setTroponinRule] = useState(generateUtils.troponinRule);
  const [ageValues, setAgeValues] = useState(generateUtils.ageValues);
  const [hstnlValues, sethstnlValues] = useState(generateUtils.hstnlValues);

  const handleAgeRule = (e) => {
    setAgeRule({ ...ageRule, [e.target.name]: e.target.value });
    saveAgeValues();
  };

  const saveAgeValues = () => {
    operatorOne.toLocaleLowerCase() === "between"
      ? setAgeArr([ageRule.ageOne, ageRule.ageTwo])
      : setAgeArr([ageRule.ageOne]);

    setAgeValues({ ...ageValues, values: ageArr, operator: operatorOne });
  };

  const handleTroponinRule = (e) => {
    setTroponinRule({ ...troponinRule, [e.target.name]: e.target.value });

    operatorTwo.toLocaleLowerCase() === "between"
      ? setHstnlArr([troponinRule.hstnlOne, troponinRule.hstnlTwo])
      : setHstnlArr([troponinRule.hstnlOne]);

    sethstnlValues({ ...hstnlValues, values: hstnlArr, operator: operatorTwo });
  };

  const generateCheckbox = (event) => {
    const checkedValue = event.target.checked;
    setGenerateRS(checkedValue);
    setGenrateDefault(false);
  };

  const changeOperatorOne = (event) => {
    setOperatorOne(event.target.value);
  };

  const changeOperatorTwo = (event) => {
    setOperatorTwo(event.target.value);
  };

  const mapJsonResponse = (_obj) => {
    _obj.forEach((configurationsItem, index) => {
      if (
        configurationsItem.ruleSectionName.toLocaleLowerCase() === "generate"
      ) {
        setGenerateRule(configurationsItem);
        if (configurationsItem.rules.length > 0) {
          /**no empty rules */
          configurationsItem.rules.forEach((ruleItem) => {
            setGenrateDefault(ruleItem.isDefault);
            setGenerateRS(ruleItem.isChecked);
            if (ruleItem.categories.length > 0) {
              /**non-empty category */
              ruleItem.categories.forEach((categoryItem) => {
                /**value categories */
                if (
                  categoryItem.categoryDefinition.toLocaleLowerCase() === "age"
                ) {
                  /**age category */
                  setOperatorOne(categoryItem.operator);
                  if (categoryItem.values.length > 0) {
                    /**non-empty values */
                    setGenerateRS(false);
                    setAgeArr(categoryItem.values);
                    setAgeRuleValues(categoryItem);
                  } else {
                    /**empty values */
                    setAgeArr([]);
                  }
                } else {
                  /**hstnl category */
                  setOperatorTwo(categoryItem.operator);
                  if (categoryItem.values.length > 0) {
                    setHstnlArr(categoryItem.values);
                    setTroponinValues(categoryItem);
                  } else {
                    setHstnlArr([]);
                  }
                }
              });
            } else {
              /**empty category */
              ruleItem.categories = [];
            }
          });
        } else {
          /**empty rule */
          setGenrateDefault(true);
          setGenerateRS(true);
        }
      }
    });
  };

  const saveStateValues = () => {
    if (generateRule.rules.length > 0) {
      /** rules available already*/
      generateRule.rules.forEach((ruleItem) => {
        if (generateRS === false) {
          /***save the values if checkbox is not selected*/
          ruleItem.isDefault = generateDefault;
          ruleItem.isChecked = generateRS;
          if (ruleItem.categories.length > 0) {
            /*check for the multiple categories */
            ruleItem.categories.forEach((categoryItem) => {
              if (
                categoryItem.categoryDefinition.toLocaleLowerCase() === "age"
              ) {
                /**added age rule here */
                categoryItem.operator = operatorOne;
                categoryItem.values = ageArr;
              } else {
                /**added troponin rule heere */
                categoryItem.operator = operatorTwo;
                categoryItem.values = hstnlArr;
              }
            });
          } else {
            /**values doesnt exists for textfields */
            ruleItem.categories.push(ageValues);
            ruleItem.categories.push(hstnlValues);
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
      if (generateRS === false) {
        /**checkbox not selected */
        generateRule.rules.categories.push(ageValues);
        generateRule.rules.categories.push(hstnlValues);
        generateRule.rules.isDefault = generateDefault;
        generateRule.rules.isChecked = generateRS;
      } else {
        /**checkbox selected */
        generateRule.rules.isDefault = generateDefault;
        generateRule.rules.isChecked = generateRS;
        generateRule.rules.categories = [];
      }
    }
    // props.popUp(generateRule);
    console.log("<----->", generateRule);
  };

  const createGenerateRule = () => {
    let response = (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5} md={5}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <h4 className={classes.ageelseheading}>Age</h4>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Select
                  labelId="simple"
                  size="small"
                  id="demo2"
                  value={operatorOne}
                  label="Age"
                  autoWidth
                  onChange={changeOperatorOne}
                  className={classes.ageelsedropdown}
                  disabled={generateRS}
                >
                  {utils.properties.operators.map((option) => {
                    return (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                size="small"
                disabled={generateRS}
                className={classes.ageElseBetweenValue}
                onChange={handleAgeRule}
                name="ageOne"
                type="number"
                value={ageRule.ageOne}
              />
            </Grid>
            {operatorOne === "Between" ? (
              <Grid item xs={12} md={4}>
                <TextField
                  size="small"
                  disabled={generateRS}
                  className={classes.ageElseBetweenValue}
                  onChange={handleAgeRule}
                  name="ageTwo"
                  type="number"
                  value={ageRule.ageTwo}
                />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} className={classes.spacingaboveand}>
          {operatorOne === "Between" ? (
            <h3 className={classes.andspacingifbetween1}>AND</h3>
          ) : (
            <h3 className={classes.andspacingifbetween2}>AND</h3>
          )}
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={1} className={classes.spacingabovehstnl}>
            <Grid item xs={12} md={12}>
              <h4>hsTnl Value</h4>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Select
                  labelId="simple2"
                  id="demo"
                  value={operatorTwo}
                  label="Age"
                  autoWidth
                  onChange={changeOperatorTwo}
                  className={classes.hstnldropdown2}
                  disabled={generateRS}
                >
                  {utils.properties.operators.map((option) => {
                    return (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                size="small"
                disabled={generateRS}
                className={classes.hstnlelsevalue1}
                onChange={handleTroponinRule}
                name="hstnlOne"
                type="number"
                value={troponinRule.hstnlOne}
              />
            </Grid>
            {operatorTwo === "Between" ? (
              <Grid item md={4}>
                <TextField
                  size="small"
                  disabled={generateRS}
                  className={classes.hstnlelsevalue2}
                  onChange={handleTroponinRule}
                  name="hstnlTwo"
                  type="number"
                  value={troponinRule.hstnlTwo}
                />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    );
    return response;
  };

  const displayValues = () => {
    saveStateValues();
  };

  const setTroponinValues = (_itm) => {
    if (_itm.values.length > 1) {
      setTroponinRule({
        ...troponinRule,
        hstnlOne: _itm.values[0],
        hstnlTwo: _itm.values[1],
      });
    } else {
      setTroponinRule({
        ...troponinRule,
        hstnlOne: _itm.values[0],
      });
    }
  };

  const setAgeRuleValues = (_itm) => {
    if (_itm.values.length > 1) {
      setAgeRule({
        ...ageRule,
        ageOne: _itm.values[0],
        ageTwo: _itm.values[1],
      });
    } else {
      setAgeRule({
        ...ageRule,
        ageOne: _itm.values[0],
      });
    }
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={12} className={classes.gridcontainer1}>
        <Card className={classes.gridcontainer}>
          <CardContent>
            <Typography className={classes.headerText}>
              Generate Risk Score for only Patients meeting criteria
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => generateCheckbox(e)}
                  {...utils.properties.label}
                  checked={generateRS}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label="All ED admits > 18 years with at least one hsTnl test result  "
            />
            <Typography
              className={`${classes.headerText} ${classes.paddingLarge}`}
            >
              Or
            </Typography>
            <Typography
              className={`${classes.headerText} ${classes.leftAlignedText}`}
            >
              User Defined Rule
            </Typography>
            {createGenerateRule()}
            <button onClick={displayValues}>Display Values</button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Generate;
