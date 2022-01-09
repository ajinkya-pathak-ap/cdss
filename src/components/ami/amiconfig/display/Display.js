import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Card, CardContent, Typography, FormControl } from "@material-ui/core";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { DisplayStyles } from "./DisplayStyles";

const Display = () => {
  const classes = DisplayStyles();

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };
  const operators = [">", "<", ">=", "<=", "=", "Between"];

  const [generateRS, setGenerateRS] = useState(true);
  const [generateDefault, setGenrateDefault] = useState(true);
  const [operatorOne, setOperatorOne] = useState("");
  const [operatorTwo, setOperatorTwo] = useState("");

  const [generateRule, setGenerateRule] = useState({
    ageOne: "",
    ageTwo: "",
    hstnlOne: "",
    hstnlTwo: "",
  });

  const handleGenerateRule = (e) => {
    setGenerateRule({ ...generateRule, [e.target.name]: e.target.value });
    enableApply(e);

    operatorOne.toLocaleLowerCase() === "between"
      ? setAgeArr([generateRule.ageOne, generateRule.ageTwo])
      : setAgeArr([generateRule.ageOne]);
    setAgeValues({ ...ageValues, values: ageArr, operator: operatorOne });

    operatorTwo.toLocaleLowerCase() === "between"
      ? setHstnlArr([generateRule.hstnlOne, generateRule.hstnlTwo])
      : setHstnlArr([generateRule.hstnlOne]);
    sethstnlValues({ ...hstnlValues, values: hstnlArr, operator: operatorTwo });
  };

  const handleGenerateRiskScore = (event) => {
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

  const enableApply = (e) => {
    if (generateRS === false) {
      operatorOne === "Between"
        ? (() => {
            if (
              generateRule.ageOne.length > 1 &&
              generateRule.ageTwo.length > 1
            ) {
              setApply(false);
            }
          })()
        : (() => {
            if (generateRule.ageOne.length > 1) {
              setApply(false);
            }
          })();

      operatorTwo === "Between"
        ? (() => {
            if (
              generateRule.hstnlOne.length > 1 &&
              generateRule.hstnlTwo.length > 1
            ) {
              setApply(false);
            }
          })()
        : (() => {
            if (generateRule.hstnlOne.length > 1) {
              setApply(false);
            }
          })();
    } else {
    }
  };

  const createGenerateRule = (props) => {
    let response;
    configData.result.configurations.forEach((v, i) => {
      if (v.ruleSectionName.toLocaleLowerCase() === "generate") {
        if (v.rules.length > 0) {
          v.rules.forEach((w) => {
            response = (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={5} md={5}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                      <h4 style={{ marginLeft: "30px" }}>Age</h4>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl fullWidth>
                        <Select
                          labelId="simple"
                          size="small"
                          // id="demo2"
                          value={operatorOne}
                          label="Age"
                          autoWidth
                          onChange={changeOperatorOne}
                          className={classes.generaters}
                          disabled={generateRS}
                        >
                          {operators.map((option) => {
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
                        className={classes.agedropdown}
                        onChange={(e) => handleGenerateRule(e)}
                        name="ageOne"
                        type="number"
                        value={generateRule.ageOne}
                        // value={
                        //   ageArr.values.length > 0
                        //     ? ageArr.values[0]
                        //     : generateRule.ageOne
                        // }
                      />
                    </Grid>
                    {operatorOne === "Between" ? (
                      <Grid item xs={12} md={4}>
                        <TextField
                          size="small"
                          disabled={generateRS}
                          className={classes.valuebox1}
                          onChange={(e) => handleGenerateRule(e)}
                          name="ageTwo"
                          type="number"
                          // value={
                          //   ageArr.values.length > 0
                          //     ? ageArr.values[1]
                          //     : generateRule.ageTwo
                          // }
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
                    <h3 className={classes.spacingandinmd}>AND</h3>
                  ) : (
                    <h3 className={classes.spacingandinmd2}>AND</h3>
                  )}
                </Grid>
                <Grid item xs={12} md={5}>
                  <Grid
                    container
                    spacing={1}
                    className={classes.spacingabovehstnl}
                  >
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
                          className={classes.hstnldropdown}
                          disabled={generateRS}
                        >
                          {operators.map((option) => {
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
                        className={classes.hstnlvalue1}
                        onChange={(e) => handleGenerateRule(e)}
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
                          className={classes.hstnlvalue2}
                          onChange={(e) => handleGenerateRule(e)}
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
              </Grid>
            );
          });
        } else {
          response = (
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
                        {operators.map((option) => {
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
                      className={classes.ageElseBetweenValue1}
                      onChange={(e) => handleGenerateRule(e)}
                      name="ageOne"
                      type="number"
                      // value={generateRule.ageOne}
                      value={
                        ageArr.values.length > 0
                          ? ageArr.values[0]
                          : generateRule.ageOne
                      }
                    />
                  </Grid>
                  {operatorOne === "Between" ? (
                    <Grid item xs={12} md={4}>
                      <TextField
                        size="small"
                        disabled={generateRS}
                        className={classes.ageElseBetweenValue2}
                        onChange={(e) => handleGenerateRule(e)}
                        name="ageTwo"
                        type="number"
                        value={
                          ageArr.values.length > 0
                            ? ageArr.values[1]
                            : generateRule.ageTwo
                        }
                        // value={generateRule.ageTwo}
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
                <Grid
                  container
                  spacing={1}
                  className={classes.spacingabovehstnl}
                >
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
                        {operators.map((option) => {
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
                      onChange={(e) => handleGenerateRule(e)}
                      name="hstnlOne"
                      type="number"
                      value={
                        hstnlArr.values.length > 0
                          ? hstnlArr.values[0]
                          : generateRule.hstnlOne
                      }
                      // value={generateRule.hstnlOne}
                    />
                  </Grid>
                  {operatorTwo === "Between" ? (
                    <Grid item md={4}>
                      <TextField
                        size="small"
                        disabled={generateRS}
                        className={classes.hstnlelsevalue2}
                        onChange={(e) => handleGenerateRule(e)}
                        name="hstnlTwo"
                        type="number"
                        value={
                          hstnlArr.values.length > 0
                            ? hstnlArr.values[1]
                            : generateRule.hstnlTwo
                        }
                        // value={generateRule.hstnlTwo}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        }
      }
    });
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
                  onChange={(e) => handleGenerateRiskScore(e)}
                  {...label}
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
              style={{ fontSize: "19px", paddingLeft: "10%" }}
              className={classes.headerText}
            >
              Or
            </Typography>
            <Typography
              style={{
                textAlign: "left",
              }}
              className={classes.headerText}
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

export default Display;
