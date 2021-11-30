import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
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
                    <Button
                      variant="contained"
                      className={classes.buttonColor}
                      style={{ textTransform: "none", marginLeft: "47%" }}
                    >
                      Apply
                    </Button>
                    <Typography
                      style={{ fontSize: "19px", paddingLeft: "10%" }}
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
                      <FormControl sx={{ m: 1, minWidth: 120, minHeight: 20 }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>Age >=65 years</option>
                          <option value={2}>Age 18-65 years</option>
                          <option value={3}>none</option>
                        </Select>
                      </FormControl>
                      <label for="">AND</label>
                      <FormControl sx={{ m: 1, minWidth: 120, height: "26px" }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>First hnTnl >5 ng/L</option>
                          <option value={2}>First hnTnl >20 ng/L</option>
                          <option value={3}>First hnTnl >10 ng/L</option>
                        </Select>
                      </FormControl>
                      <label for="">AND</label>
                      <FormControl sx={{ m: 1, minWidth: 120, minHeight: 20 }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>First hnTnl 50 ng/L</option>
                          <option value={2}>First hnTnl 50 ng/L</option>
                        </Select>
                      </FormControl>
                      <label for="">AND</label>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>symptoms onset > 3 hours</option>
                          <option value={2}>symptoms onset > 4 hours</option>
                          <option value={2}>symptoms onset > 5 hours</option>
                        </Select>
                      </FormControl>

                      {/* <Stack xs={12} direction="row" spacing={2}> */}
                      {/* <input
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
                        /> */}
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
                      <Button
                        variant="contained"
                        className={classes.buttonColor}
                        style={{ textTransform: "none", marginLeft: "4%" }}
                      >
                        Apply
                      </Button>
                      {/* </Stack> */}
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "19px",
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
                      <FormControl sx={{ m: 1, minWidth: 120, minHeight: 20 }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>Age >=65 years</option>
                          <option value={2}>Age 18-65 years</option>
                        </Select>
                      </FormControl>
                      <label for="">AND</label>
                      <FormControl sx={{ m: 1, minWidth: 120, height: "26px" }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>First hnTnl >5 ng/L</option>
                          <option value={2}>First hnTnl >20 ng/L</option>
                        </Select>
                      </FormControl>
                      <label for="">AND</label>
                      <FormControl sx={{ m: 1, minWidth: 120, minHeight: 20 }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>First hnTnl 50 ng/L</option>
                          <option value={2}>First hnTnl 50 ng/L</option>
                        </Select>
                      </FormControl>
                      <label for="">AND</label>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          native
                          defaultValue="65 years"
                          id="Age"
                          label="Age"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        >
                          <option value={1}>symptoms onset > 3 hours</option>
                          <option value={2}>symptoms onset > 4 hours</option>
                          <option value={2}>symptoms onset > 5 hours</option>
                        </Select>
                      </FormControl>
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
                      <Button
                        variant="contained"
                        className={classes.buttonColor}
                        style={{ textTransform: "none", marginLeft: "4%" }}
                      >
                        Apply
                      </Button>
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
                      Create new user defined rule
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
                    <Typography variant="subtitle1" className="fw-bold">
                      Display Risk Score for only Patients meeting the following
                      criteria
                    </Typography>
                    <br></br>
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label for="">BETWEEN</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label for="">And</label>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label for="">risk of MACE within 30 days</label>

                        <Button
                          variant="contained"
                          className={classes.buttonColor}
                          style={{
                            textTransform: "none",
                            marginLeft: "258px",
                          }}
                        >
                          Apply
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
                    <Grid item xs={12}>
                      <Stack xs={12} direction="row" spacing={2}>
                        <label for="pin">BETWEEN</label>
                        <TextField
                          id="1"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label for="pin">And</label>
                        <TextField
                          id="2"
                          variant="standard"
                          style={{
                            backgroundColor: "#fff",
                            height: "26px",
                            fontSize: "13px",
                          }}
                        />
                        <label for="pin">risk of MACE within 30 days</label>

                        <Button
                          variant="contained"
                          alignItems="end"
                          className={classes.buttonColor}
                          style={{ textTransform: "none", marginLeft: "258px" }}
                        >
                          Apply
                        </Button>
                      </Stack>
                    </Grid>
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
            {/* *****************end of third container***************** */}
            <Grid item xs={12} container justify="flex-end">
              <div justifyContent="flex-end">
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
