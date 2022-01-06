import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, FormControl } from "@material-ui/core";
import {
  AMIConfigStyles,
  amiConfigBtns,
  amiConfigInputs,
} from "./CustomStyles";
import { configurationService } from "../../services/config-service";
import CircularIndeterminate from "../../shared/preloder/Preloder";

const BootstrapButton = amiConfigBtns;
const BootstrapInput = amiConfigInputs;

export default function AMIConfiguration(props) {
  const [operatorOne, setOperatorOne] = useState("");
  const [operatorTwo, setOperatorTwo] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  /**fetch response */
  const [configData, setConfigData] = useState({});
  /**isChecked */
  const [generateRS, setGenerateRS] = useState(true);
  const [displayRS, setDisplayRS] = useState(true);
  const [otherRS, setOtherRS] = useState(true);
  /**isDefault */
  const [generateDefault, setGenrateDefault] = useState(true);
  const [displayDefault, setDisplayDefault] = useState(true);
  const [otherDefault, setOtherDefault] = useState(true);
  /**values arrays */
  const [ageArr, setAgeArr] = useState([]);
  const [hstnlArr, setHstnlArr] = useState([]);
  const [displayArr, setDisplayArr] = useState([]);
  const [otherArr, setOtherArr] = useState([]);
  const [apply, setApply] = useState(true);
  const [generateRule, setGenerateRule] = useState({
    ageOne: "",
    ageTwo: "",
    hstnlOne: "",
    hstnlTwo: "",
    displayOne: "",
    displayTwo: "",
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
  const [displayValues, setDisplayValues] = useState({
    categoryDefinition: "hstnl",
    operator: "Between",
    values: [],
  });
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };
  const operators = [">", "<", ">=", "<=", "=", "Between"];
  const classes = AMIConfigStyles();
  const fetchRequestObject = {
    OganizationId: 1,
    ModelId: 1,
  };

  useEffect(() => {
    fetchConfigData(fetchRequestObject);
  }, []);

  const changeOperatorOne = (event) => {
    setOperatorOne(event.target.value);
  };

  const changeOperatorTwo = (event) => {
    setOperatorTwo(event.target.value);
  };

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
  const handleDisplayRule = (e) => {
    console.log("---------------", e);
    setGenerateRule({ ...generateRule, [e.target.name]: e.target.value });
    // enableApply(e);
    setDisplayValues({
      ...displayValues,
      values: [
        `${generateRule.displayOne}%`.split("%")[0],
        `${generateRule.displayTwo}%`.split("%")[0],
      ],
    });
  };
  const handleGenerateRiskScore = (event) => {
    const checkedValue = event.target.checked;
    setGenerateRS(checkedValue);
    setGenrateDefault(false);
  };

  const handleDisplayRiskScore = (event) => {
    const checkedValue = event.target.checked;
    setDisplayRS(checkedValue);
    setDisplayDefault(false);
    checkedValue ? setApply(false) : setApply(true);
  };

  const fetchConfigData = (_config) => {
    if (props.localMode) {
      configurationService.getConfigurationLocal(_config).then(
        (response) => {
          setConfigData(response.data);
          mapJsonResponse(response.data);
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

  const saveConfigData = (_config) => {
    if (props.localMode) {
      configurationService.saveConfiguration(_config).then(
        (response) => {},
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

  const applySetings = () => {
    saveStateValues();
    console.log("..configData..", configData.result);
    // saveConfigData(postRequestObject);
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

  const mapJsonResponse = (_obj) => {
    _obj.result.configurations.forEach((items, index) => {
      if (items.ruleSectionName.toLocaleLowerCase() === "generate") {
        if (items.rules.length > 0) {
          /**create rules dom here */
          items.rules.forEach((item_0) => {
            /**declare default & checked */
            setGenrateDefault(item_0.isDefault);
            setGenerateRS(item_0.isChecked);
            if (item_0.categories.length > 0) {
              item_0.categories.forEach((item_1) => {
                /**create values categories */
                setAgeArr(item_1);
              });
            }
          });
        } else {
          setGenrateDefault(true);
          setGenerateRS(true);
        }
      } else if (items.ruleSectionName.toLocaleLowerCase() === "display") {
        if (items.rules.length > 0) {
          /**create rules dom here */
          items.rules.forEach((item_0) => {
            /**declare default & checked */
            setDisplayDefault(item_0.isDefault);
            setDisplayRS(item_0.isChecked);
            if (item_0.categories.length > 0) {
              item_0.categories.forEach((item_1) => {
                /**create values categories */
                setHstnlArr(item_1);
              });
            }
          });
        }
      } else if (items.ruleSectionName.toLocaleLowerCase() === "other") {
        if (items.rules.length > 0) {
          /**create rules dom here */
          items.rules.forEach((item_0) => {
            /**declare default & checked */
            setOtherDefault(item_0.isDefault);
            setOtherRS(item_0.isChecked);
            if (item_0.categories.length > 0) {
              item_0.categories.forEach((item_1) => {
                /**create values categories */
                setOtherArr(item_1);
              });
            }
          });
        }
      }
    });
  };

  const createGenerateRule = () => {
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
                          id="demo2"
                          value={operatorOne}
                          label="Age"
                          autoWidth
                          onChange={changeOperatorOne}
                          style={{
                            fontSize: "13px",
                            backgroundColor: "#fff",
                            width: "100px",
                            height: "40px",
                          }}
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
                        style={{
                          backgroundColor: "#fff",
                          width: "100px",
                        }}
                        onChange={(e) => handleGenerateRule(e)}
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
                          style={{
                            backgroundColor: "#fff",
                            width: "100px",
                          }}
                          onChange={(e) => handleGenerateRule(e)}
                          name="ageTwo"
                          type="number"
                        />
                      </Grid>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2} className={classes.spacingaboveand}>
                  {operatorOne === "Between" ? (
                    <h3
                      style={{
                        marginLeft: "30px",
                        marginTop: "83px",
                      }}
                    >
                      AND
                    </h3>
                  ) : (
                    <h3
                      style={{
                        marginLeft: "0px",
                        marginTop: "82px",
                      }}
                    >
                      AND
                    </h3>
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
                          style={{
                            fontSize: "13px",
                            backgroundColor: "#fff",
                            width: "100px",
                            height: "40px",
                          }}
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
                        style={{
                          backgroundColor: "#fff",
                          width: "100px",
                        }}
                        onChange={(e) => handleGenerateRule(e)}
                        name="hstnlOne"
                        type="number"
                      />
                    </Grid>
                    {operatorTwo === "Between" ? (
                      <Grid item md={4}>
                        <TextField
                          size="small"
                          disabled={generateRS}
                          style={{
                            backgroundColor: "#fff",
                            width: "100px",
                          }}
                          onChange={(e) => handleGenerateRule(e)}
                          name="hstnlTwo"
                          type="number"
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
                    <h4 style={{ marginLeft: "30px" }}>Age</h4>
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
                        style={{
                          fontSize: "13px",
                          backgroundColor: "#fff",
                          width: "100px",
                          height: "40px",
                        }}
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
                      style={{
                        backgroundColor: "#fff",
                        width: "100px",
                      }}
                      onChange={(e) => handleGenerateRule(e)}
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
                        style={{
                          backgroundColor: "#fff",
                          width: "100px",
                        }}
                        onChange={(e) => handleGenerateRule(e)}
                        name="ageTwo"
                        type="number"
                      />
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12} md={2} className={classes.spacingaboveand}>
                {operatorOne === "Between" ? (
                  <h3
                    style={{
                      marginLeft: "30px",
                      marginTop: "83px",
                    }}
                  >
                    AND
                  </h3>
                ) : (
                  <h3
                    style={{
                      marginLeft: "0px",
                      marginTop: "82px",
                    }}
                  >
                    AND
                  </h3>
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
                        style={{
                          fontSize: "13px",
                          backgroundColor: "#fff",
                          width: "100px",
                          height: "40px",
                        }}
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
                      style={{
                        backgroundColor: "#fff",
                        width: "100px",
                      }}
                      onChange={(e) => handleGenerateRule(e)}
                      name="hstnlOne"
                      type="number"
                    />
                  </Grid>
                  {operatorTwo === "Between" ? (
                    <Grid item md={4}>
                      <TextField
                        size="small"
                        disabled={generateRS}
                        style={{
                          backgroundColor: "#fff",
                          width: "100px",
                        }}
                        onChange={(e) => handleGenerateRule(e)}
                        name="hstnlTwo"
                        type="number"
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

  const createDisplayRule = () => {
    let response;
    configData.result.configurations.forEach((v, i) => {
      if (v.ruleSectionName.toLocaleLowerCase() === "display") {
        if (v.rules.length > 0) {
          v.rules.forEach((w) => {
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

  const saveStateValues = () => {
    /**generate rule-section */
    configData.result.configurations.forEach((item_0) => {
      if (item_0.ruleSectionName.toLocaleLowerCase() === "generate") {
        if (item_0.rules.length > 0) {
          /** if rules exists*/
          item_0.rules.forEach((item_1) => {
            if (generateRS === false) {
              /** if checkbox is not checked */
              item_1.isDefault = generateDefault;
              item_1.isChecked = generateRS;

              if (item_1.categories.length > 0) {
                /**values exists for textfields */
                item_1.categories[0].values = ageArr;
                item_1.categories[0].operator = operatorOne;
                item_1.categories[1].values = hstnlArr;
                item_1.categories[1].operator = operatorTwo;
              } else {
                /**values doesnt exists for textfields */
                item_1.categories.push(ageValues);
                item_1.categories.push(hstnlValues);
              }
            } else {
              /**if checkbox selected */
              item_1.categories = [];
            }
          });
        } else {
          /**no rules */
          if (generateRS === false) {
            /**checkbox not selected */
            item_0.rules[0].categories.push(ageValues);
            item_0.rules[0].categories.push(hstnlValues);
            item_0.rules[0].isDefault = generateDefault;
            item_0.rules[0].isChecked = generateRS;
          } else {
            /**checkbox selected */
            item_0.rules[0].isDefault = generateDefault;
            item_0.rules[0].isChecked = generateRS;
            item_0.rules[0].categories = [];
          }
        }
      } else if (item_0.ruleSectionName.toLocaleLowerCase() === "display") {
        if (item_0.rules.length > 0) {
          /** if rules exists*/
          item_0.rules.forEach((item_1) => {
            if (displayRS === false) {
              /** if checkbox is not checked */
              item_1.isDefault = displayDefault;
              item_1.isChecked = displayRS;
              if (item_1.categories.length > 0) {
                /**values exists for textfields */
                item_1.categories[0].values = [
                  `${generateRule.displayOne}%`.split("%")[0],
                  `${generateRule.displayTwo}%`.split("%")[0],
                ];
                item_1.categories[0].operator = "Between";
              } else {
                /**values doesnt exists for textfields */
                item_1.categories = displayValues;
              }
            } else {
              /**if checkbox selected */
              item_1.categories = [];
            }
          });
        } else {
          /**no rules */
          if (displayRS === false) {
            /**checkbox not selected */
            item_0.rules[0].categories[0].values = [
              `${generateRule.displayOne}%`.split("%")[0],
              `${generateRule.displayTwo}%`.split("%")[0],
            ];
            item_0.rules[0].isDefault = displayDefault;
            item_0.rules[0].isChecked = displayRS;
          } else {
            /**checkbox selected */
            item_0.rules[0].isDefault = generateDefault;
            item_0.rules[0].isChecked = generateRS;
            item_0.rules[0].categories = [];
          }
        }
      }
    });

    /**others settings */
    if (configData.result.configurations[2].rules.length) {
      configData.result.configurations[2].rules[0].isDefault = otherDefault;
      configData.result.configurations[2].rules[0].isChecked = otherRS;
      configData.result.configurations[2].rules[0].categories = otherArr;
    } else {
      configData.result.configurations[2].rules[0].categories[0] = [];
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
              {/******************First container******************/}
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
              {/******************First container******************/}

              {/******************Second container******************/}
              <Grid container item xs={12}>
                <Grid item xs={12} className={classes.gridcontainer1}>
                  <Card className={classes.gridcontainer}>
                    <CardContent>
                      <Typography className={classes.headerText}>
                        Display Risk Score for only Patients meeting the
                        following
                      </Typography>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) => handleDisplayRiskScore(e)}
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
              {/******************Second container******************/}
              {/******************third container******************/}
              <Grid item xs={12}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography className={classes.headerText}>
                      Other Settings
                    </Typography>
                    <FormGroup
                      className={`${classes.formgrop} ${classes.headerText}`}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...label}
                            defaultChecked={otherRS}
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
                </Card>
              </Grid>
              {/******************third container******************/}
              {/******************bottom buttons******************/}
              <Grid item xs={12} container className={classes.alignRight}>
                <Grid item xs={12} md={4}>
                  <Stack spacing={2} direction="row" justifyContent="end">
                    <BootstrapButton
                      style={{ marginLeft: "10px" }}
                      variant="contained"
                      className={classes.buttonColor}
                      onClick={applySetings}
                      // disabled={apply}
                    >
                      {/* <Link className={classes.buttonColor} to="">
                        <span className="m-2">Apply</span>
                      </Link> */}
                      Apply
                    </BootstrapButton>
                    <BootstrapButton
                      variant="contained"
                      className={classes.buttonColor}
                    >
                      Reset
                    </BootstrapButton>
                    <BootstrapButton
                      variant="contained"
                      className={classes.buttonColor}
                    >
                      <Link className={classes.buttonColor} to="/amioutput">
                        <span className="m-2">Close</span>
                      </Link>
                    </BootstrapButton>
                  </Stack>
                </Grid>
              </Grid>
              {/******************bottom buttons******************/}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
