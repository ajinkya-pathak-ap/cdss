import { makeStyles } from "@material-ui/core";

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

  resize: {
    fontSize: 11,
  },

  inputFields: {
    textAlign: "right",
    fontSize: "14px !important",
  },
}));
