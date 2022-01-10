import { makeStyles } from "@material-ui/core";

/**AMI CDS input Screen Styles */
export const PatientHistoryStyles = makeStyles((theme) => ({
  patientHistory: {
    backgroundColor: "#050038",
  },

  patientagelabel: {
    color: "red",
    marginTop: "5px",
    marginLeft: "9px",
  },

  patientage: {
    paddingTop: "10px",
    margin: "6px",
    backgroundColor: "white",
    border: "1px solid #808080",
  },

  ekgfindingscont: {
    backgroundColor: "#6D7F9B",
  },

  ekgfindingscont2: {
    backgroundColor: "#050038",
    paddingLeft: "16px",
  },

  ekgformlabel: {
    textAlign: "left",
    fontSize: "18px",
    color: "#fff",
    fontWeight: "800",
  },

  patientinfolabelfont: {
    fontSize: "14px",
  },

  seconddrawtypo: {
    marginLeft: "20px",
    fontSize: "14px",
  },

  thirddrawtypo: {
    marginLeft: "20px",
    fontSize: "14px",
  },

  patientinfo: {
    color: "#fff",
    borderColor: "#7B1FA2",
    backgroundColor: "red",
  },

  holder: {
    backgroundColor: "#6D7F9B",
    width: "70%",
    backgroundColor: "#6D7F9B",
    padding: "30px",
    marginTop: "30px",
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
    marginTop: "-10px !important",
  },

  firstinputspace: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
  },
  firstinputspace2: {
    paddingTop: "10px",
    width: "80%",
    backgroundColor: "white",
    border: "1px solid #808080",
  },

  secondinputspace1: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
  },

  secondinputspace2: {
    paddingTop: "10px",
    width: "80%",
    backgroundColor: "white",
    border: "1px solid #808080",
  },

  thirdinputspace1: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
  },

  thirdinputspace2: {
    paddingTop: "10px",
    width: "80%",
    backgroundColor: "white",
    border: "1px solid #808080",
  },

  firstdraw: {
    marginLeft: "20px",
    fontSize: "14px",
    textAlign: "center",
  },

  drawtime: {
    fontWeight: "700",
    marginLeft: "70px",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "40px",
    },
  },
}));
