import { makeStyles } from "@material-ui/core";

/**AMI CDS Output Screen Styles */
export const RiskScoreStyles = makeStyles((theme) => ({
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
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
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

  headerTextThree: {
    fontSize: "11px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },

  riskScoreShell: {
    fontSize: "38px",
    lineHeight: "3.5",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#f24726",
    borderRadius: "50%",
    width: "8rem",
    height: "9rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
      lineHeight: "8.0",
      width: "8rem",
      height: "7rem",
    },

    [theme.breakpoints.down("md")]: {
      width: "7rem",
      height: "6rem",
      fontSize: "12px",
      lineHeight: "8.4",
    },
  },
}));
