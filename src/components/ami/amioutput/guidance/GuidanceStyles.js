import { makeStyles } from "@material-ui/core";

/**AMI CDS Output Screen Styles */
export const GuidanceStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  gridcontainer3: {
    background: "#050038",
    color: "#fff",
    borderRadius: "4px",
    textAlign: "left",
    minHeight: "80px",
    marginTop: "-18px",
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

  hyperLink: {
    color: "white",
    fontSize: "13px",
    cursor: "pointer",
    textDecoration: "underline",
  },
  typo: {
    color: "red",
    fontSize: "14px",
  },
}));
