import React from "react";
import { Grid } from "./shared/material/mui";
import "./App.css";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import SideNav from "./components/navigation/SideNavBar";
import ShellComponent from "./components/navigation/ShellComponent";
import Login from "../src/components/common/Login";
import { connect } from "react-redux";

function App(props) {
return (
  <div className="App">
    {/* <Header /> */}
    {props.isLoggedIn === false ? (
      // <Grid container>
      //   <Grid item sm={12} xs={12}>
      //     <ShellComponent />
      //     <Login />
      //   </Grid>
      // </Grid>

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
            <ShellComponent />
          </Grid>
        </Grid>
      </Grid>
    ) : (
      <React.Fragment>
        {/* <Header />
        <Grid container>
          <Grid item sm={6} xs={6}>
            <SideNav />
          </Grid>
          <Grid item sm={12} xs={12}>
            <ShellComponent />
          </Grid>
        </Grid> */}
      </React.Fragment>
    )}
  </div>
);
}
const mapStateToProps = (rootReducer) => {
  return {
    isLoggedIn: rootReducer.login.isLoggedIn,
    role: rootReducer.login.role,
    authToken: rootReducer.login.authToken,
  };
};
// export default App;
export default connect(mapStateToProps, null)(App);

