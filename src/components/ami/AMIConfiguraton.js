import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@material-ui/core/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import { TextFieldsRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "75%",
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
  textFieldColor: {
    width: "5%",
    height: "100px",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const commonStyles = {
  bgcolor: "#f24726",
  m: 1,
  width: "5rem",
  height: "5rem",
};

const greaterThanSign = `>`;

export default function AMIConfiguration() {
  const [checked, setChecked] = React.useState(true);

  /******methods of checkbox********/
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();

  return (
    <Grid container item xs={12} spacing={4} className={classes.mainContainer}>
      <Grid item sm={12} xs={12}>
        <Box
          sx={{ bgcolor: "#6D7F9B" }}
          marginTop={3}
          paddingLeft={4}
          paddingRight={4}
          paddingTop={5}
        >
          <Grid container item xs={12} spacing={2}>
            {/* *****************First container***************** */}
            <Grid container item xs={12}>
              <Grid item xs={12} className={classes.gridcontainer1}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography variant="subtitle1" className="fw-bold">
                      Generate Risk Score for only Patients meeting criteria
                    </Typography>
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
                      label="All ED admits > 18 years with at least one hsTnl test result  "
                    />
                    <Typography
                      style={{ fontSize: "19px", paddingLeft: "10%" }}
                    >
                      Or
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                      }}
                    >
                      User defined Rules
                    </Typography>
                    <br />
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label htmlFor="">Rule 1</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label htmlFor="">AND</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label htmlFor="">AND</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                      </Stack>
                    </Grid>
                    <br />
                    <br />
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label htmlFor="">Rule 2</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label htmlFor="">AND</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label htmlFor="">AND</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                      </Stack>
                    </Grid>
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
            {/* ***************** End of first container ***************** */}
            {/* *****************Second container***************** */}
            <Grid container item xs={12}>
              <Grid item xs={12} className={classes.gridcontainer1}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <h3 variant="subtitle1" className="fw-bold">
                      Display Risk Score for only Patients meeting the following
                      criteria
                    </h3>
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
                      label="Display ALL Risk Scores"
                    />

                    <Typography
                      style={{
                        fontSize: "19px",
                        paddingLeft: "10%",
                        marginTop: 15,
                      }}
                    >
                      Or
                    </Typography>
                    <br />
                    <Typography
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        fontWeight: "bold",
                      }}
                    >
                      User Defined Ranges
                    </Typography>
                    <br />
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label htmlFor="">BETWEEN</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label htmlFor="">And</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label htmlFor="">risk of MACE within 30 days</label>
                      </Stack>
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        paddingLeft: "10%",
                        justifycontent: "left",
                      }}
                    >
                      And
                    </Typography>
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label htmlFor="pin">BETWEEN</label>
                        <TextField
                          id="1"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label hhtmlFor="pin">And</label>
                        <TextField
                          id="2"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label hhtmlFor="pin">
                          risk of MACE within 30 days
                        </label>
                      </Stack>
                    </Grid>
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
            {/* *****************end of Second container***************** */}

            {/* *****************third container***************** */}
            <Grid item xs={12}>
              <Card className={classes.gridcontainer}>
                <CardContent>
                  <Typography variant="subtitle1" className="fw-bold">
                    Other Settings
                  </Typography>
                  <FormGroup className={classes.formgrop}>
                    <FormControlLabel
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
                    />
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
            <Grid item xs={12} container justify="flex-end">
              <div justifycontent="flex-end">
                <Button
                  variant="contained"
                  style={{
                    textTransform: "none",

                    backgroundColor: "#414BB2",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#414BB2",
                    },
                  }}
                >
                  Close
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
