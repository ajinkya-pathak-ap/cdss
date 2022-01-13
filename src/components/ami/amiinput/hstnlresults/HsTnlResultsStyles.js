import { makeStyles } from "@material-ui/core";

/**AMI CDS input Screen HsTnlResultsStyles  */
export const HsTnlResultsStyles = makeStyles((theme) => ({
  patientagelabel: {
    color: "red",
    marginTop: "5px",
    marginLeft: "9px",
  },

  seconddrawtypo: {
    marginLeft: "20px",
    fontSize: "14px",
  },

  thirddrawtypo: {
    marginLeft: "20px",
    fontSize: "14px",
  },

  formgrop: {
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignitems: "flex-start",
  },

  inputFields: {
    textAlign: "left",
    fontSize: "14px !important",
  },

  firstinputspace: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
    textAlign: "left",
    pointerEvents: "none",
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
    textAlign: "left",
    paddingLeft: "20px",
    pointerEvents: "none",
  },

  secondinputspace1: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
    textAlign: "left",
    pointerEvents: "none",
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
    pointerEvents: "none",
    textAlign: "left",
  },

  thirdinputspace1: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
    textAlign: "left",
    pointerEvents: "none",
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
    pointerEvents: "none",
    textAlign: "left",
  },

  firstdraw: {
    marginLeft: "20px",
    fontSize: "14px",
    textAlign: "center",
  },

  drawtime: {
    fontWeight: "700",
    marginLeft: "80px",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "40px",
    },
  },
}));
