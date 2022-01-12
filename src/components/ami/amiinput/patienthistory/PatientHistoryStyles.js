import { makeStyles } from "@material-ui/core";

/**AMI CDS input Screen Styles */
export const PatientHistoryStyles = makeStyles((theme) => ({
  patientHistory: {
    backgroundColor: "#050038",
    paddingLeft: "20px",
    borderRadius: "10px",
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

  textFieldColorGender: {
    // backgroundColor: "white",
    // textAlign: "right",
    // height: " 3.10em",
    // borderRadius: "3px",
    // color: "#000",
    // fontSize: "14px",
    // border: "none",
    backgroundColor: "white",
    textAlign: "right",
    height: " 2.65em",
    color: "#000",
    fontSize: "14px",
    borderRadius: "3px",
  },

  textFieldColorTrial: {
    // backgroundColor: "white",
    // textAlign: "right",
    // height: " 3.10em",
    // borderRadius: "3px",
    // color: "#000",
    // fontSize: "14px",
    // border: "none",
    backgroundColor: "white",
    textAlign: "right",
    height: " 3.35em",
    color: "#000",
    fontSize: "14px",
    borderRadius: "3px",
    paddingBottom: "10px",
    border: "none",
  },

  fontTypeOneTrial: {
    fontSize: "14px !important",
    // marginTop: "-10px !important",
  },

  textFieldColorRace: {
    // backgroundColor: "white",
    // textAlign: "right",
    // justifyItems: "center",
    // paddingTop: "5px",
    // marginTop: "5px",

    // height: " 3.10em",
    // borderRadius: "3px",
    // color: "#000",
    // fontSize: "14px",
    // border: "none",
    backgroundColor: "white",
    textAlign: "right",
    height: " 2.65em",
    color: "#000",
    fontSize: "14px",
    borderRadius: "3px",
    border: "none",
    paddingBottom: "10px",
  },

  textFieldColor: {
    backgroundColor: "white",
    textAlign: "right",
    height: " 2.65em",
    color: "#000",
    fontSize: "14px",
    border: "none",
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
    fontSize: "14px",
    color: "#fff",
    textAlign: "left",
    marginLeft: "8px",
  },

  fontTypeOne: {
    fontSize: "14px !important",
    marginTop: "-10px !important",
  },

  fontTypePresentingSymptoms: {
    fontSize: "14px !important",
  },
  multiSelectDdLabel: {
    zIndex: "1",
    transform: "translate(0,15px) scale(1)",
    fontSize: "14px",
    marginLeft: "10px",
    color: "#000",
  },
  MuiSvgIconRoot: {
    top: "-5px",
  },
}));
