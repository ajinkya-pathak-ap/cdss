import { makeStyles, Button, styled } from "@material-ui/core";

export const AcknowledgeStyles = makeStyles((theme) => ({
  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    textTransform: "none",
  },

  buttonColor1: {
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
    fontSize: "13px",
    cursor: "pointer",
    textDecoration: "underline",
  },

  alignRight: {
    marginTop: "-15px",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
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

export const BootstrapButton = styled(Button)((props) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "14px",
  color: "#fff",
  padding: "6px 32px",
  lineHeight: 1.9,
  backgroundColor: "#414bb2",
  fontFamily: ["Roboto"].join(","),
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
  [props.theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
