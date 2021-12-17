import React, { useState } from "react";
import { alpha, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  FormControl,
} from "@material-ui/core";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "14px",
  color: "#fff",
  padding: "6px 32px",
  lineHeight: 1.9,
  backgroundColor: "#414bb2",
  fontFamily: ["Roboto"].join(","),

  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    fontSize: "20px",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    fontSize: 14,
    width: "70%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "100%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
  },
  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  gridcontainer1: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  typo: {
    color: "red",
    fontSize: "12px",
  },

  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    justifycontent: "left",
  },

  hyperLink: {
    color: "white",
    cursor: "pointer",
    textDecoration: "underline",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
  riskOne: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  riskTwo: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  holder: {
    backgroundColor: "#6D7F9B",
    width: "75%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
  },

  firstform: {
    "& .MuiFormControl-root": {
      width: "25%",
      margin: theme.spacing(1),
      float: "left",
    },
  },
}));

export default function AMIConfiguration() {
  const [operatorOne, setOperatorOne] = React.useState("");
  const [operatorTwo, setOperatorTwo] = React.useState("");

  const changeOperatorOne = (event) => {
    setOperatorOne(event.target.value);
  };
  const changeOperatorTwo = (event) => {
    setOperatorTwo(event.target.value);
  };

  const [generateRS, setGenerateRS] = useState(false);

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };
  const handleGeneareRiskScore = (event) => {
    setGenerateRS(event.target.checked);
  };
  const operators = [">", "<", ">=", "<=", "=", "Between"];

  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      spacing={4}
      justifycontent="center"
      alignItems="center"
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
                          onChange={handleGeneareRiskScore}
                          {...label}
                          defaultChecked
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
                    <br />
                    <Grid item container spacing={2} xs={12}>
                      <Grid item xs={6} md={2}>
                        <h5>Operator</h5>
                        <FormControl fullWidth>
                          <Select
                            labelId="simple"
                            id="demo2"
                            value={operatorOne}
                            label="Age"
                            autoWidth
                            onChange={changeOperatorOne}
                            style={{
                              backgroundColor: "#fff",
                              width: "80px",
                              height: "35px",
                            }}
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
                      <Grid item xs={6} md={2}>
                        <h5>Value-1</h5>
                        <TextField
                          style={{
                            backgroundColor: "#fff",
                            width: "70px",
                            fontSize: "12px",
                          }}
                          id="outlined-basic"
                          label="65"
                          variant="filled"
                        />
                      </Grid>
                      {operatorOne === "Between" ? (
                        <Grid item xs={6} md={1}>
                          <h5>Value-2</h5>
                          <TextField
                            style={{
                              backgroundColor: "#fff",
                              width: "70px",
                              fontSize: "12px",
                            }}
                            id="outlined-basic"
                            label="All"
                            variant="filled"
                          />
                        </Grid>
                      ) : (
                        ""
                      )}
                      <Grid item xs={12} md={1}>
                        <h4 style={{ marginLeft: "15px", marginTop: "65px" }}>
                          AND
                        </h4>
                      </Grid>

                      <Grid item xs={6} md={2}>
                        <h5>Operator</h5>
                        <FormControl fullWidth>
                          <Select
                            labelId="simple2"
                            id="demo"
                            value={operatorTwo}
                            label="Age"
                            autoWidth
                            onChange={changeOperatorTwo}
                            style={{
                              // marginLeft: "18px",
                              backgroundColor: "#fff",
                              width: "80px",
                              height: "35px",
                            }}
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

                      <Grid item xs={6} md={2}>
                        <h5>Value-1</h5>
                        <TextField
                          style={{
                            backgroundColor: "#fff",
                            width: "80px",
                            fontSize: "12px",
                          }}
                          id="outlined-basic"
                          label="456"
                          variant="filled"
                        />
                      </Grid>

                      {operatorTwo === "Between" ? (
                        <Grid item xs={6} md={2}>
                          <h5>Value-2</h5>
                          <TextField
                            style={{
                              backgroundColor: "#fff",
                              width: "80px",
                              fontSize: "12px",
                            }}
                            id="outlined-basic"
                            label="All"
                            variant="filled"
                          />
                        </Grid>
                      ) : (
                        ""
                      )}
                    </Grid>
                    <br />
                    <br />

                    <Button
                      className={classes.buttonColor}
                      variant="contained"
                      style={{
                        textTransform: "none",
                        backgroundColor: "#414BB2",
                        marginBottom: "10px",
                        float: "right",
                      }}
                    >
                      Apply
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              {/* ***************** end of User defined rule2 code  ***************** */}
            </Grid>
            {/* *****************Second container***************** */}
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
                          onChange={handleGeneareRiskScore}
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
                        <label className={classes.headerText}>BETWEEN</label>
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
                            id="range"
                          />
                        </FormControl>
                        <label className={classes.headerText}>AND</label>
                        <FormControl variant="standard">
                          {/* <InputLabel
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "#fff",
                              marginLeft: "40px",
                              width: "80%",
                            }}
                            shrink
                            htmlFor="hstnl"
                          >
                            First hsTnl Value
                          </InputLabel> */}
                          <BootstrapInput
                            style={{
                              marginLeft: "20px",
                              marginRight: "10px",
                              width: "60px",
                              textAlign: "center",
                            }}
                            defaultValue="1%"
                            id="range"
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
                    <br />

                    <Button
                      className={classes.buttonColor}
                      variant="contained"
                      style={{
                        textTransform: "none",
                        backgroundColor: "#414BB2",
                        marginBottom: "10px",
                        float: "right",
                      }}
                    >
                      Apply
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              {/* ***************** end of User defined rule2 code  ***************** */}
            </Grid>
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
                    {/* <FormControlLabel
                      control={
                        <Checkbox
                          {...label}
                          defaultChecked
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Document risk score and contributors in EMR  "
                    /> */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Share de-identified data and results with Beckman Coulter "
                    />
                  </FormGroup>
                  <Button
                    className={classes.buttonColor}
                    variant="contained"
                    style={{
                      textTransform: "none",
                      backgroundColor: "#414BB2",
                      marginBottom: "10px",
                      float: "right",
                    }}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            {/* *****************end of third container***************** */}
            <Grid item xs={12} container className={classes.alignRight}>
              <Stack spacing={2} direction="row">
                <BootstrapButton
                  variant="contained"
                  className={classes.buttonColor}
                >
                  <Link className={classes.buttonColor} to="">
                    <span className="m-2"> Reset</span>
                  </Link>
                </BootstrapButton>
                <BootstrapButton
                  variant="contained"
                  className={classes.buttonColor}
                >
                  <Link className={classes.buttonColor} to="/amioutput">
                    <span className="m-2"> Close</span>
                  </Link>
                </BootstrapButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
