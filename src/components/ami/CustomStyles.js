import {
  Button,
  InputBase,
  makeStyles,
  styled,
  alpha,
} from "@material-ui/core";

/** AMI Header Styles */
export const amiHeader = makeStyles((theme) => ({
  searchBtnIcon: {
    alignItems: "center",
  },
}));

/**AMI CDS Output Screen Styles */
export const amiOutputStyles = makeStyles((theme) => ({
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

/**AMI CDS Input Screen Styles */
export const CDSInputStyles = makeStyles((theme) => ({
  patientHistory: {
    backgroundColor: "#050038",
  },

  patientagelabel: {
    color: "red",
    marginTop: "5px",
    marginLeft: "9px",
  },

  patientage: {
    paddingTop: "10px",
    margin: "6px",
    backgroundColor: "white",
    border: "1px solid #808080",
  },

  ekgfindingscont: {
    backgroundColor: "#6D7F9B",
  },

  ekgfindingscont2: {
    backgroundColor: "#050038",
    paddingLeft: "16px",
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

  seconddrawtypo: {
    marginLeft: "20px",
    fontSize: "14px",
  },

  thirddrawtypo: {
    marginLeft: "20px",
    fontSize: "14px",
  },

  patientinfo: {
    color: "#fff",
    borderColor: "#7B1FA2",
    backgroundColor: "red",
  },

  holder: {
    backgroundColor: "#6D7F9B",
    width: "70%",
    backgroundColor: "#6D7F9B",
    padding: "30px",
    marginTop: "30px",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  firstform: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
      float: "left",
    },
  },

  secondform: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1),
    },
  },

  formgrop: {
    textAlign: "left",
    color: "white",
    backgroundColor: "#050038",
    alignitems: "flex-start",
  },

  buttonColor: {
    backgroundColor: "#414bb2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#414BB2",
    },
  },

  textFieldColor: {
    backgroundColor: "white",
    textAlign: "right",
    height: " 2.65em",
    color: "#000",
    fontSize: "14px",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    color: "#fff",
    textAlign: "left",
  },

  headerTextThree: {
    fontSize: "14px",
    color: "#fff",
    textAlign: "left",
    marginLeft: "8px",
  },

  nonDisable: {
    color: "rgba(0, 0, 0, 0.38) !important",
  },

  inputFields: {
    textAlign: "right",
    fontSize: "14px !important",
  },

  fontTypeOne: {
    fontSize: "14px !important",
    marginTop: "-10px !important",
  },

  firstinputspace: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
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
  },

  secondinputspace1: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
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
  },

  thirdinputspace1: {
    paddingTop: "10px",
    width: "70%",
    backgroundColor: "white",
    border: "1px solid #808080",
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
  },

  firstdraw: {
    marginLeft: "20px",
    fontSize: "14px",
    textAlign: "center",
  },

  drawtime: {
    fontWeight: "700",
    marginLeft: "70px",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "40px",
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

/**AMI CDS config Screen Styles */
export const AMIConfigStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  },

  typo: {
    color: "red",
    fontSize: "12px",
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

  hyperLink: {
    color: "white",
    cursor: "pointer",
    textDecoration: "underline",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
  riskOne: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  riskTwo: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  holder: {
    backgroundColor: "#6D7F9B",
    width: "75%",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
  },

  firstform: {
    "& .MuiFormControl-root": {
      width: "25%",
      margin: theme.spacing(1),
      float: "left",
    },
  },

  generaters: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
  },

  spacing: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "47px",
      marginBottom: "5px",
    },
  },

  agedropdown: {
    backgroundColor: "#fff",
    width: "100px",
  },

  valuebox1: {
    backgroundColor: "#fff",
    width: "100px",
  },

  spacingandinmd: {
    marginLeft: "30px",
    marginTop: "83px",
  },

  spacingandinmd2: {
    marginLeft: "0px",
    marginTop: "82px",
  },

  hstnldropdown: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
  },

  betweenspacing: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
      marginLeft: "18px",
      marginBottom: "5px",
    },
  },

  spacingaboveand: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-70px",
      marginLeft: "20px",
    },
  },

  spacingabovehstnl: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-35px",
      marginLeft: "0px",
    },
  },
}));

export const amiConfigBtns = styled(Button)((props) => ({
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

export const amiConfigInputs = styled(InputBase)(({ theme }) => ({
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
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

/**AMI CDS Riskcontributor Screen*/
export const riskContributorStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.between("md", "lg")]: {
      width: "56%",
    },
    [theme.breakpoints.only("xl")]: {
      width: "40%",
    },
  },
}));

/**AMI CDS Chest Pain Management Screen*/
