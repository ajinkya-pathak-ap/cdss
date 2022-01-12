import { makeStyles } from "@material-ui/core";

export const btnStyles = makeStyles((theme) => ({
  buttonColor: {
    backgroundColor: "#414bb2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
  },

  riskScore1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  riskScore2: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "10px !important",
      marginLeft: "4px !important",
    },
  },
}));
