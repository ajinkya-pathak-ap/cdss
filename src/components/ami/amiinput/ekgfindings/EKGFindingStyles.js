import { makeStyles } from "@material-ui/core";

/**AMI CDS input Screen Styles */
export const EKGFindingsStyles = makeStyles((theme) => ({
  ekgfindingscont: {
    backgroundColor: "#6D7F9B",
  },

  ekgfindingscont2: {
    backgroundColor: "#050038",
    paddingLeft: "16px",
    paddingBottom: "16px",
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

  patientinfo: {
    color: "#fff",
    borderColor: "#7B1FA2",
    backgroundColor: "red",
  },

  formgrop: {
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignitems: "flex-start",
  },
}));
