import { Button, makeStyles, styled } from "@material-ui/core";

export const ContributorsStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
    marginTop: "10px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },

  headerTextTwo: {
    fontWeight: "bold",
    fontSize: "16px",
  },

  headerTextThree: {
    fontSize: "11px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },
}));
