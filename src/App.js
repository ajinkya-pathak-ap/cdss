import React from "react";
import { Grid } from "./shared/material/mui";
import "./App.css";
import Header from "./components/navigation/Header";
import ShellComponent from "./components/navigation/ShellComponent";
import { connect } from "react-redux";
import Errorboundry from "./shared/errorboundry/Errorboundry";

//test changes for git test

function App(props) {
  return (
    <div className="App">
      {props.isLoggedIn === false ? (
        <Grid container spacing={2}>
          <Grid item md={12} sm={12} xs={12}></Grid>
          <Grid container>
            <Grid></Grid>
            {/* <Grid item md={4} sm={12} xs={12}>
            sidenav
          </Grid> */}
            <Grid item md={12} sm={12} xs={12}>
              {/* sidenav&mainmenu */}
              <Errorboundry>
                <ShellComponent />
              </Errorboundry>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
              {/* Header */}
              <Header />
            </Grid>
            <Grid container>
              <Grid></Grid>
              {/* <Grid item md={4} sm={12} xs={12}>
            sidenav
          </Grid> */}
              <Grid item md={12} sm={12} xs={12}>
                {/* sidenav&mainmenu */}
                <Errorboundry>
                  <ShellComponent />
                </Errorboundry>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
}
const mapStateToProps = (rootReducer) => {
  return {
    isLoggedIn: rootReducer.login.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(App);
