import { Button, makeStyles, styled } from "@material-ui/core";

export const BootstrapButton = styled(Button)((props) => ({
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
  [props.theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const RiskContributorStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  gridcontainer2: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
    marginTop: "-18px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  moreInfo: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },

  moreInfoBtn_1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  moreInfoBtn_2: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
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

  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    textTransform: "none",
  },

  buttonColor1: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    textTransform: "none",
  },

  smallMargin: {
    [theme.breakpoints.down("md")]: {
      marginRight: "25px",
    },
  },
}));
