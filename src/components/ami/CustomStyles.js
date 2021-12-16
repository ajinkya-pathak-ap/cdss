import { makeStyles } from "@material-ui/core";

/**AMI CDS Output Screen Styles */
export const amiOutputStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "65%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
  },

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
    fontSize: "14px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },

  headerTextTwo: {
    fontWeight: "bold",
    fontSize: "16px",
  },

  headerTextThree: {
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px",
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

  hyperLink: {
    color: "white",
    cursor: "pointer",
    textDecoration: "underline",
  },

  alignRight: {
    justifyContent: "flex-end",
  },

  circle: {
    fontSize: "42px",
    lineHeight: "3.5",
    fontWeight: "bold",
    color: "black",
  },
  acknowledgeBtn_1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  acknowledgeBtn_2: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "10px !important",
      marginLeft: "4px !important",
    },
  },
}));

/**AMI CDS Input Screen Styles */
export const CDSInputStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "70%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  firstform: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
      float: "left",
    },
  },

  secondform: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1),
    },
  },

  formgrop: {
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignitems: "flex-start",
  },

  buttonColor: {
    backgroundColor: "#414bb2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },

  textFieldColor: {
    backgroundColor: "white",
    textAlign: "right",
    height: " 2.65em",
    color: "#000",
    fontSize: "14px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    color: "#fff",
    textAlign: "left",
  },

  headerTextThree: {
    fontSize: "14px",
    color: "#fff",
    textAlign: "left",
    marginLeft: "8px",
  },

  nonDisable: {
    color: "rgba(0, 0, 0, 0.38) !important",
  },

  inputFields: {
    textAlign: "right",
    fontSize: "14px !important",
  },

  fontTypeOne: {
    fontSize: "14px !important",
  },
}));

/**AMI CDS config Screen Styles */

/**AMI CDS Riskcontributor Screen*/
export const riskContributorStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#fff",
    color: "#000",
    textAlign: "center",
    minHeight: "250px",
    borderRadius: "50px",
  },
  gridcontainer1: {
    background: "#050038",
    color: "#fff",
    textAlign: "center",
    minHeight: "80px",
    borderRadius: "50px",
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
  },
  whiteBtn: {
    color: "#fff",
    textDecoration: "none",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
}));

/**AMI CDS Chest Pain Management Screen*/
