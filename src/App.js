import React from "react";
import { Grid } from "./shared/material/mui";
import "./App.css";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import SideNav from "./components/navigation/SideNavBar";
import ShellComponent from "./components/navigation/ShellComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item sm={12} xs={12}>
          <SideNav />
        </Grid>
        <Grid item sm={12} xs={12}>
          <ShellComponent />
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
