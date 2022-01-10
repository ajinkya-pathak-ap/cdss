import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Card, CardContent, Typography, FormControl } from "@material-ui/core";

import { DisplayStyles, displayRuleInput } from "./DisplayStyles";

const BootstrapInput = displayRuleInput;

const Display = (props) => {
  const classes = DisplayStyles();

  const { configurations } = props.config;
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };

  const [displayRS, setDisplayRS] = useState(true);
  const [displayDefault, setDisplayDefault] = useState(true);

  const [displayArr, setDisplayArr] = useState([]);
  const [displayRule, setDisplayRule] = useState({
    displayOne: "",
    displayTwo: "",
  });

  const [displayValues, setDisplayValues] = useState({
    categoryDefinition: "hstnl",
    operator: "Between",
    values: [],
  });

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
    setDisplayRule({ ...displayRule, [e.target.name]: e.target.value });

    setDisplayValues({
      ...displayValues,
      values: [
        `${displayRule.displayOne}%`.split("%")[0],
        `${displayRule.displayTwo}%`.split("%")[0],
      ],
    });
  };

  const mapJsonResponse = (_obj) => {
    _obj.forEach((configurationsItem, index) => {
      if (
        configurationsItem.ruleSectionName.toLocaleLowerCase() === "display"
      ) {
        if (configurationsItem.rules.length > 0) {
          /**create rules dom here */
          configurationsItem.rules.forEach((ruleIteam) => {
            /**declare default & checked */
            setDisplayDefault(ruleIteam.isDefault);
            setDisplayRS(ruleIteam.isChecked);
            if (ruleIteam.categories.length > 0) {
              ruleIteam.categories.forEach((categoryItem, ind) => {
                /**create values categories */
                // setOperatorTwo(categoryItem.operator);
                setDisplayArr(categoryItem);
              });
            }
          });
        }
      }
    });
  };

  const createDisplayRule = () => {
    let response;
    configurations.forEach((v, i) => {
      if (v.ruleSectionName.toLocaleLowerCase() === "display") {
        if (v.rules.length > 0) {
          v.rules.forEach((w) => {
            response = (
              <Grid container spacing={2}>
                <Grid container spacing={0}>
                  <Grid item xs={12} md={1} className={classes.betweenspacing}>
                    <Typography
                      variant={"h6"}
                      className={classes.DisRiskbetween}
                    >
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
                        className={classes.DisRiskinput}
                        defaultValue="0%"
                        disabled={displayRS}
                        id="rangeOne"
                        name="displayOne"
                        onChange={(e) => handleDisplayRule(e)}
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
                        className={classes.DisRiskinput2}
                        defaultValue="1%"
                        disabled={displayRS}
                        id="rangeTwo"
                        name="displayTwo"
                        onChange={(e) => handleDisplayRule(e)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant={"h6"} className={classes.riskofmace}>
                      risk of MACE within 30 days
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
              </Grid>
            );
          });
        } else {
          response = (
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
                      defaultValue="0%"
                      disabled={displayRS}
                      id="rangeOne"
                      name="displayOne"
                      onChange={(e) => handleDisplayRule(e)}
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
                      defaultValue="1%"
                      disabled={displayRS}
                      id="rangeTwo"
                      name="displayTwo"
                      onChange={(e) => handleDisplayRule(e)}
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
              Display Risk Score for only Patients meeting the following
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleDisplayRuleCheck(e)}
                  {...label}
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Display;
