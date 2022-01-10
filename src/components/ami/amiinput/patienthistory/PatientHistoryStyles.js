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

  firstform: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
      float: "left",
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

  fontTypeOne: {
    fontSize: "14px !important",
    marginTop: "-10px !important",
  },
}));
