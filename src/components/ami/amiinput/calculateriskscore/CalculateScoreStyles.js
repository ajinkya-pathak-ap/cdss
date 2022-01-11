import { makeStyles, styled, InputBase } from "@material-ui/core";

export const CalculateScoreStyles = makeStyles((theme) => ({
  buttonColor: {
    backgroundColor: "#414bb2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
    textTransform: "none",
    backgroundColor: "#414BB2",
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

export const bootstrappedInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    fontSize: 13,
    width: "auto",
    padding: "9px 10px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: ["Roboto"].join(","),
  },
}));
