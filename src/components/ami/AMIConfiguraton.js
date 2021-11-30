import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import ModalPopup from "../../shared/dialog/ModalPopup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import { green, lightBlue, purple } from "@material-ui/core/colors";
import TextField from "@mui/material/TextField";

import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Link,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    justifyContent: "left",
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

  /** globals */

  /****************methods**************/

  return (
    <Grid container item xs={12} spacing={4}>
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
              <Grid item xs={10} className={classes.gridcontainer1}>
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
                      style={{ fontSize: "16px", paddingLeft: "10%" }}
                    >
                      Or
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "10px",
                        textAlign: "left",
                      }}
                    >
                      User defined Rule1
                    </Typography>
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">AND</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">AND</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">AND</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />

                        <Button
                          className={classes.buttonColor}
                          variant="contained"
                          style={{
                            textTransform: "none",
                            backgroundColor: "#414BB2",
                            alignItems: "right",
                          }}
                        >
                          Add criteria
                        </Button>
                      </Stack>
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        paddingLeft: "10%",
                        justifyContent: "left",
                      }}
                    >
                      And
                    </Typography>
                    <Typography style={{ fontSize: "10px" }}>
                      User defined Rule2
                    </Typography>
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">AND</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">AND</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">AND</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />

                        <Button
                          className={classes.buttonColor}
                          variant="contained"
                          style={{
                            textTransform: "none",
                            backgroundColor: "#414BB2",
                            alignItems: "right",
                          }}
                        >
                          Add criteria
                        </Button>
                      </Stack>
                    </Grid>
                    <br></br>
                    <Button
                      className={classes.buttonColor}
                      variant="contained"
                      style={{
                        textTransform: "none",
                        backgroundColor: "#414BB2",
                        alignItems: "right",
                      }}
                    >
                      Add
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              {/* ***************** end of User defined rule2 code  ***************** */}

              <Grid
                container
                item
                xs={2}
                className={classes.gridcontainer1}
                alignItems="center"
              >
                <Button variant="contained" className={classes.buttonColor}>
                  <span style={{ textTransform: "none" }}>More Info</span>
                </Button>
                <Button variant="contained" className={classes.buttonColor}>
                  <span style={{ textTransform: "none" }}>More Info</span>
                </Button>
                <Button variant="contained" className={classes.buttonColor}>
                  <span style={{ textTransform: "none" }}>More Info</span>
                </Button>
              </Grid>
            </Grid>
            {/* ***************** AND ***************** */}

            {/* *****************Second container***************** */}
            <Grid container item xs={12}>
              <Grid item xs={10} className={classes.gridcontainer1}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography variant="subtitle1" className="fw-bold">
                      Display Risk Score for only Patients meeting the following
                      criteria
                    </Typography>
                    <br></br>
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label for="pin">BETWEEN</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">And</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">risk of MACE within 30 days</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                      </Stack>
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        paddingLeft: "10%",
                        justifyContent: "left",
                      }}
                    >
                      And
                    </Typography>
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label for="pin">BETWEEN</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">And</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                        <label for="pin">risk of MACE within 30 days</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          maxlength="4"
                          maxheight="2"
                          size="4"
                        />
                      </Stack>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* ***************** end of User defined rule2 code  ***************** */}

              <Grid
                container
                item
                xs={2}
                className={classes.gridcontainer1}
                alignItems="center"
                direction="column"
              >
                <Button
                  variant="contained"
                  className={classes.buttonColor}
                  style={{ textTransform: "none", marginTop: "20px" }}
                >
                  Apply
                </Button>
                <br></br>
                <Button
                  variant="contained"
                  className={classes.buttonColor}
                  style={{ textTransform: "none" }}
                >
                  Apply
                </Button>
              </Grid>
            </Grid>
            {/* *****************end of Second container***************** */}

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
                    variant="contained"
                    className={classes.buttonColor}
                    style={{ textTransform: "none", marginTop: "20px" }}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.buttonColor}
                style={{ textTransform: "none", justifyItems: "right" }}
              >
                More Info
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
