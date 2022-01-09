import { makeStyles } from "@material-ui/core";

/**AMI CDS Riskcontributor Screen*/
export const RiskContributorStyles = makeStyles((theme) => ({
  contribcontainer: {
    background: "#fff",
    color: "#000",
    textAlign: "center",
    width: "85%",
    alignItems: "center",
    borderRadius: "50px",
    minHeight: "250px",
    marginLeft: "20px",
  },

  listpadding: {
    paddingInlineStart: "13px",
  },

  typo: {
    color: "red",
    fontSize: "12px",
  },

  typoofriskscore: {
    fontSize: "18px",
    textAlign: "center",
    paddingTop: "90px",
    textAlign: "center",
  },

  cardcont: {
    textAlign: "center",
  },

  sx: {
    bgcolor: "#6D7F9B",
    minHeight: "250px",
  },

  buttonColor: {
    backgroundColor: "#414BB2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },
  whiteBtn: {
    color: "#fff",
    textDecoration: "none",
  },
  alignRight: {
    justifyContent: "flex-end",
  },

  contrimainContainer: {
    backgroundColor: "#6D7F9B",
    width: "60%",
    minHeight: "250px",
    left: "0",
    right: "0",
    marginTop: "40px",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between("md", "lg")]: {
      width: "56%",
    },
    [theme.breakpoints.only("xl")]: {
      width: "40%",
    },
  },
}));
