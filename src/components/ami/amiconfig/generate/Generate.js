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
  const { configurations } = props.config;

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  const [generateRS, setGenerateRS] = useState(true);
  const [generateDefault, setGenrateDefault] = useState(true);
  const [operatorOne, setOperatorOne] = useState("");
  const [operatorTwo, setOperatorTwo] = useState("");
  const [ageArr, setAgeArr] = useState([]);
  const [hstnlArr, setHstnlArr] = useState([]);

  const [generateRule, setGenerateRule] = useState({
    ageOne: "",
    ageTwo: "",
    hstnlOne: "",
    hstnlTwo: "",
  });

  const [ageValues, setAgeValues] = useState({
    categoryDefinition: "Age",
    operator: "",
    values: [],
  });

  const [hstnlValues, sethstnlValues] = useState({
    categoryDefinition: "hstnl",
    operator: "",
    values: [],
  });

  const handleGenerateRule = (e) => {
    setGenerateRule({ ...generateRule, [e.target.name]: e.target.value });

    operatorOne.toLocaleLowerCase() === "between"
      ? setAgeArr([generateRule.ageOne, generateRule.ageTwo])
      : setAgeArr([generateRule.ageOne]);

    setAgeValues({ ...ageValues, values: ageArr, operator: operatorOne });

    operatorTwo.toLocaleLowerCase() === "between"
      ? setHstnlArr([generateRule.hstnlOne, generateRule.hstnlTwo])
      : setHstnlArr([generateRule.hstnlOne]);

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
        if (configurationsItem.rules.length > 0) {
          /**no empty rules */
          configurationsItem.rules.forEach((ruleIteam) => {
            setGenrateDefault(ruleIteam.isDefault);
            setGenerateRS(ruleIteam.isChecked);
            if (ruleIteam.categories.length > 0) {
              /**non-empty category */
              ruleIteam.categories.forEach((categoryItem) => {
                /**value categories */
                if (
                  categoryItem.categoryDefinition.toLocaleLowerCase() === "age"
                ) {
                  /**age category */
                  setOperatorOne(categoryItem.operator);
                  if (categoryItem.values.length > 0) {
                    /**non-empty values */
                    setAgeArr(categoryItem);
                  } else {
                    /**empty values */
                    setAgeArr([]);
                  }
                } else {
                  /**hstnl category */
                  setOperatorTwo(categoryItem.operator);
                  if (categoryItem.values.length > 0) {
                    setHstnlArr(categoryItem);
                  } else {
                    setHstnlArr([]);
                  }
                }
              });
            } else {
              /**empty category */
              ruleIteam.categories = [];
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
                onChange={handleGenerateRule}
                name="ageOne"
                type="number"
                value={generateRule.ageOne}
              />
            </Grid>
            {operatorOne === "Between" ? (
              <Grid item xs={12} md={4}>
                <TextField
                  size="small"
                  disabled={generateRS}
                  className={classes.ageElseBetweenValue}
                  onChange={handleGenerateRule}
                  name="ageTwo"
                  type="number"
                  value={generateRule.ageTwo}
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
                onChange={handleGenerateRule}
                name="hstnlOne"
                type="number"
                value={generateRule.hstnlOne}
              />
            </Grid>
            {operatorTwo === "Between" ? (
              <Grid item md={4}>
                <TextField
                  size="small"
                  disabled={generateRS}
                  className={classes.hstnlelsevalue2}
                  onChange={handleGenerateRule}
                  name="hstnlTwo"
                  type="number"
                  value={generateRule.hstnlTwo}
                />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        {console.log("--------", ageValues)}
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
              Generate Risk Score for only Patients meeting criteria
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => generateCheckbox(e)}
                  {...utils.properties.label}
                  defaultChecked={generateRS}
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Generate;
