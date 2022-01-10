import {
  Button,
  InputBase,
  makeStyles,
  styled,
  alpha,
} from "@material-ui/core";

export const saveConfigBtns = styled(Button)((props) => ({
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

export const SaveConfigStyles = makeStyles((theme) => ({
  alignRight: {
    justifyContent: "flex-end",
  },
  buttonColor: {
    backgroundColor: "#414BB2",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    justifycontent: "left",
  },
}));
