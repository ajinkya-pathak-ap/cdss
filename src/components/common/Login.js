import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./common_style.css";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/actionCreator";
import "../common/styles/cmn_styles.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InitializeReduxStore from "./InitializeReduxStore";

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 280,
  margin: "60px auto",
  marginTop: "110px",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const Login = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string("Enter your password")
      .required("Required")
      .min(4, "Password should be of minimum 4 characters length"),
  });

  const onSubmit = (values) => {
    const payload = { email: values.email, password: values.password };
    props.login(payload);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (props.isLoggedIn) {
      /** Snacksbar Component Added Here */
      // props.flashNotification({
      //   message: "Login Succeessful...",
      //   type: "success",
      // });
      navigate("/demographics");
    }
  }, [0]);

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <br />
            <h4>Sign In</h4>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  margin="normal"
                  type="text"
                  name="email"
                  // onChange={handleUserChange}
                  placeholder="Enter email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  label="password"
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  // onChange={handleUserChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  helperText={<ErrorMessage name="password" />}
                />

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                  fullWidth
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
          <Typography> Do you have an account ?</Typography>
          <a href="/registeruser">Sign Up</a>
          <p className="text text-danger fw-bold text-center"></p>
        </Paper>
      </Grid>
      {/* <InitializeReduxStore /> */}
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    role: state.login.role,
    globalmessage: state.login.globalmessage,
    authToken: state.login.authToken,
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(actionCreator.Login(user)),
  };
};

let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof(Login);

// export default Login;
