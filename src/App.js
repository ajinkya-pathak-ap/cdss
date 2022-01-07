import React from "react";
import { Grid } from "./shared/material/mui";
import "./App.css";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import SideNav from "./components/navigation/SideNavBar";
import ShellComponent from "./components/navigation/ShellComponent";
import Login from "../src/components/common/Login";
import { connect } from "react-redux";
import BasicMenu from "../src/components/ami/dropdownmenu";
import Errorboundry from "./shared/errorboundry/Errorboundry";

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
