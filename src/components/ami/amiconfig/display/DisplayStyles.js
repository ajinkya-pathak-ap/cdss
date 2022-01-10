import { InputBase, makeStyles, styled, alpha } from "@material-ui/core";

export const DisplayStyles = makeStyles((theme) => ({
  //---
  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },
  //----
  gridcontainer1: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },
  //---
  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  //----
  betweenspacing: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
      marginLeft: "18px",
      marginBottom: "5px",
    },
  },

  //-----
  DisRiskbetween: {
    marginLeft: "10px",
  },
  // ----
  DisRiskinput: {
    width: "80px",
    textAlign: "right",
  },
  // ----
  spacing: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "47px",
      marginBottom: "5px",
    },
  },

  // ----
  DisRiskinput2: {
    marginLeft: "-20px",
    width: "80px",
  },
  // ----
  riskofmace: {
    marginLeft: "5px",
    fontSize: "18px",
  },
}));

export const displayRuleInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    fontSize: "20px",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    fontSize: 14,
    width: "70%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: ["Roboto"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
