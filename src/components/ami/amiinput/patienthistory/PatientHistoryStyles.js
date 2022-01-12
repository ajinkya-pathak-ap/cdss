import { makeStyles } from "@material-ui/core";

/**AMI CDS input Screen Styles */
export const PatientHistoryStyles = makeStyles((theme) => ({
  patientHistory: {
    backgroundColor: "#050038",
    paddingLeft: "20px",
    borderRadius: "10px",
    // paddingBottom:"10px",
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
    paddingBottom: "15px",
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
    fontSize: "12px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    color: "#fff",
    textAlign: "left",
    paddingLeft: "10px",
    paddingTop: "10px",
  },

  headerTextThree: {
    fontSize: "12px",
    color: "#fff",
    textAlign: "left",
    marginLeft: "8px",
  },

  fontTypeOne: {
    fontSize: "12px !important",
    marginTop: "-10px !important",
  },

  fontTypePresentingSymptoms: {
    fontSize: "12px !important",
  },
  multiSelectDdLabel: {
    zIndex: "1",
    transform: "translate(0,15px) scale(1)",
    fontSize: "12px",
    marginLeft: "10px",
    color: "#000",
  },
  MuiSvgIconRoot: {
    top: "-5px !important",
  },

  select: {
    "&:before": {
      borderColor: "red",
    },
    "&:after": {
      borderColor: "red",
    },
  },
  icon: {
    fill: "red",
  },
}));
