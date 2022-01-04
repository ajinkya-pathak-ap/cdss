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
  const [configData, setConfigData] = useState({});
  const [generateRS, setGenerateRS] = useState(true);
  const [displayRS, setDisplayRS] = useState(true);
  const [generateRule, setGenerateRule] = useState({
    ageOne: "",
    ageTwo: "",
    hstnlOne: "",
    hstnlTwo: "",
    displayOne: "",
    displayTwo: "",
  });
  const [generateDefault, setGenrateDefault] = useState(true);
  const [displayDefault, setDisplayDefault] = useState(true);
  const [otherDefault, setOtherDefault] = useState(true);
  const [apply, setApply] = useState(true);
  const [ageArr, setAgeArr] = useState([]);
  const [hstnlArr, setHstnlArr] = useState([]);

  const changeOperatorOne = (event) => {
    setOperatorOne(event.target.value);
  };

  const changeOperatorTwo = (event) => {
    setOperatorTwo(event.target.value);
  };

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
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

  const operators = [">", "<", ">=", "<=", "=", "Between"];
  const classes = AMIConfigStyles();

  const fetchRequestObject = {
    OganizationId: 1,
    ModelId: 1,
  };

  const handleGenerateRule = (e) => {
    setGenerateRule({ ...generateRule, [e.target.name]: e.target.value });
    enableApply(e);
    operatorOne === "Between"
      ? setAgeArr([generateRule.ageOne, generateRule.ageTwo])
      : setAgeArr([generateRule.ageOne]);

    operatorTwo === "Between"
      ? setHstnlArr([generateRule.hstnlOne, generateRule.hstnlTwo])
      : setHstnlArr([generateRule.hstnlOne]);
  };

  let postRequestObject = {
    configurationId: 1,
    oganizationId: 1,
    modelId: 1,
    configurations: [
      {
        ruleSectionId: 1,
        rules: [
          {
            isDefault: generateDefault,
            isChecked: generateRS,
            categories: [
              {
                categoryDefinition: "Age",
                operator: operatorOne,
                Values: ageArr,
              },
              {
                categoryDefinition: "hsTnl",
                operator: operatorTwo,
                Values: hstnlArr,
              },
            ],
          },
        ],
      },
      {
        ruleSectionId: 2,
        rules: [
          {
            isDefault: displayDefault,
            isChecked: displayRS,
            categories: [
              {
                categoryDefinition: "hsTnl",
                operator: "Between",
                Values: [
                  `${generateRule.displayOne}%`.split("%")[0],
                  `${generateRule.displayTwo}%`.split("%")[0],
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  useEffect(() => {
    fetchConfigData(fetchRequestObject);
  }, [0]);

  const fetchConfigData = (_config) => {
    if (props.localMode) {
      configurationService.getConfigurationLocal(_config).then(
        (response) => {
          setConfigData(response.data);
          setIsFetching(false);
          setGenerateRS(
            response.data.result.configurations[0].rules[0].isChecked
          );
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
        (response) => {
          console.log("Succefully Save Settings", response);
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

  const applySetings = () => {
    debugger;
    saveConfigData(postRequestObject);
    console.log(postRequestObject);
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
        justifycontent="center"
        alignItems="center"
        className={classes.holder}
        // style={{ marginTop: "-80px" }}
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
              {/* *****************First container***************** */}
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
                            defaultChecked={
                              configData.result.configurations[0].rules[0]
                                .isChecked
                            }
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
                                />
                              </Grid>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={2}
                          className={classes.spacingaboveand}
                        >
                          {operatorOne === "Between" ? (
                            <h3
                              style={{ marginLeft: "30px", marginTop: "83px" }}
                            >
                              AND
                            </h3>
                          ) : (
                            <h3
                              style={{ marginLeft: "0px", marginTop: "82px" }}
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
                                />
                              </Grid>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {/* ***************** end of User defined rule2 code  ***************** */}

              {/* *****************Second container***************** */}
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
                            defaultChecked
                            {...label}
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
                      <Grid container spacing={2}>
                        <Grid container spacing={0}>
                          <Grid
                            item
                            xs={12}
                            md={1}
                            className={classes.betweenspacing}
                          >
                            <Typography
                              variant={"h6"}
                              style={{ marginLeft: "10px" }}
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
                                style={{
                                  width: "80px",
                                  textAlign: "right",
                                }}
                                defaultValue="0%"
                                disabled={displayRS}
                                id="rangeOne"
                                name="displayOne"
                                onChange={(e) => handleGenerateRule(e)}
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
                                onChange={(e) => handleGenerateRule(e)}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            {/* <label
                              className={`${classes.riskTwo} ${classes.headerText}`}
                            >
                              risk of MACE within 30 days
                            </label> */}
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
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {/* <Grid container item xs={12}>
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
                            defaultChecked
                            {...label}
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
                      <Grid item xs={12}>
                        <Box component="form" noValidate>
                          <label className={classes.headerText}>Between</label>
                          <FormControl
                            variant="standard"
                            style={{ textAlign: "right" }}
                          >
                            <BootstrapInput
                              style={{
                                marginLeft: "20px",
                                marginRight: "10px",
                                width: "60px",
                                textAlign: "right",
                              }}
                              defaultValue="0%"
                              disabled={displayRS}
                              id="rangeOne"
                              name="displayOne"
                              onChange={(e) => handleGenerateRule(e)}
                            />
                          </FormControl>
                          <label className={classes.headerText}>And</label>
                          <FormControl variant="standard">
                            <BootstrapInput
                              style={{
                                marginLeft: "20px",
                                marginRight: "10px",
                                width: "60px",
                                textAlign: "center",
                              }}
                              defaultValue="1%"
                              disabled={displayRS}
                              id="rangeTwo"
                              name="displayTwo"
                              onChange={(e) => handleGenerateRule(e)}
                            />
                          </FormControl>
                          <label
                            className={`${classes.riskOne} ${classes.headerText}`}
                          >
                            risk of MACE within 30 days
                          </label>
                        </Box>
                        <label
                          className={`${classes.riskTwo} ${classes.headerText}`}
                        >
                          risk of MACE within 30 days
                        </label>
                      </Grid>
                      <br />

                     
                    </CardContent>
                  </Card>
                </Grid>
                ***************** end of User defined rule2 code  *****************
              </Grid> */}
              {/* *****************third container***************** */}
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
              {/* *****************end of third container***************** */}
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
                      {/* <Link className={classes.buttonColor} to="">
                        <span className="m-2">Reset</span>
                      </Link> */}
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
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
