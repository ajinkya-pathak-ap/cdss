import { makeStyles } from "@material-ui/core";

export const GenerateStyles = makeStyles((theme) => ({
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

  headerText: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  generaters: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
  },

  agedropdown: {
    backgroundColor: "#fff",
    width: "100px",
  },

  valuebox1: {
    backgroundColor: "#fff",
    width: "100px",
  },

  spacingaboveand: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-70px",
      marginLeft: "20px",
    },
  },

  spacingandinmd: {
    marginLeft: "30px",
    marginTop: "83px",
  },

  spacingandinmd2: {
    marginLeft: "0px",
    marginTop: "82px",
  },

  spacingabovehstnl: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-35px",
      marginLeft: "0px",
    },
  },

  hstnldropdown: {
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

  ageelseheading: {
    marginLeft: "30px",
  },

  ageelsedropdown: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
  },

  ageElseBetweenValue: {
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

  hstnldropdown2: {
    fontSize: "13px",
    backgroundColor: "#fff",
    width: "100px",
    height: "40px",
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
}));