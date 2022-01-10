import { makeStyles } from "@material-ui/core";

/**AMI CDS ChestpainStyles */
export const ChestpainStyles = makeStyles((theme) => ({
  outsidecontainer: {
    height: 350,
    marginRight: "auto",
    marginLeft: "auto",
    background: "#6D7F9B",
    marginTop: "30px",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
    },
  },

  insidecontainer: {
    height: 70,
    borderRadius: "10px",
    marginRight: "auto",
    marginLeft: "auto",
    alignItems: "center",
    background: "#fff",
    marginBottom: "50px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
  },

  typoofhospitalhead: {
    fontSize: "16px",
    justifyContent: "center",
  },

  buttonColor: {
    backgroundColor: "#414BB2",
    color: "#fff",
    marginRight: "40px",
    marginTop: "80px",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },
  whiteBtn: {
    color: "#fff",
    textDecoration: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
}));
