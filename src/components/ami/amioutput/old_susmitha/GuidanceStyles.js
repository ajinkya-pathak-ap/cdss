/**AMI CDS GuidanceStyles */
export const GuidanceStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#6D7F9B",
    width: "75%",
    position: "absolute",
    left: "0",
    right: "0",

    margin: "auto",
    [theme.breakpoints.between("md", "lg")]: {
      width: "60%",
    },
    [theme.breakpoints.only("xl")]: {
      width: "40%",
    },
  },

  gridcontainer: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
  },

  gridcontainer1: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  gridcontainer2: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
    marginTop: "-18px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  gridcontainer3: {
    background: "#050038",
    color: "#fff",
    textAlign: "left",
    minHeight: "80px",
    marginTop: "-18px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  moreInfo: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },

  moreInfoBtn_1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  moreInfoBtn_2: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  typo: {
    color: "red",
    fontSize: "14px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },

  headerTextTwo: {
    fontWeight: "bold",
    fontSize: "16px",
  },

  headerTextThree: {
    fontSize: "11px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },

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

  riskScoreShell: {
    fontSize: "42px",
    lineHeight: "3.5",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#f24726",
    borderRadius: "50%",
    width: "9rem",
    height: "9rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
      lineHeight: "8.3",
      width: "8rem",
      height: "8rem",
    },

    [theme.breakpoints.down("md")]: {
      width: "6rem",
      height: "6rem",
      fontSize: "12px",
      lineHeight: "8.4",
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

  smallMargin: {
    [theme.breakpoints.down("md")]: {
      marginRight: "25px",
    },
  },
}));
