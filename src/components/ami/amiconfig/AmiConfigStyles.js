import {
  Button,
  InputBase,
  makeStyles,
  styled,
  alpha,
} from "@material-ui/core";

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

  ageelsedropdown: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
  },

  ageElseBetweenValue1: {
    backgroundColor: "#fff",
    width: "100px",
  },

  ageElseBetweenValue2: {
    backgroundColor: "#fff",
    width: "100px",
  },

  andspacingifbetween1: {
    marginLeft: "30px",
    marginTop: "83px",
  },

  andspacingifbetween2: {
    marginLeft: "0px",
    marginTop: "82px",
  },

  ageelseheading: {
    marginLeft: "30px",
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

  hstnldropdown2: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
  },

  hstnlvalue1: {
    backgroundColor: "#fff",
    width: "100px",
  },

  hstnlvalue2: {
    backgroundColor: "#fff",
    width: "100px",
  },

  hstnlelsevalue1: {
    backgroundColor: "#fff",
    width: "100px",
  },

  hstnlelsevalue2: {
    backgroundColor: "#fff",
    width: "100px",
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

  //display risk score //
  DisRiskbetween: {
    marginLeft: "10px",
  },

  DisRiskinput: {
    width: "80px",
    textAlign: "right",
  },

  DisRiskinput2: {
    marginLeft: "-20px",
    width: "80px",
  },

  riskofmace: {
    marginLeft: "5px",
    fontSize: "18px",
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
