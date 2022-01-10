import { makeStyles } from "@material-ui/core";

/**AMI CDS input Screen Styles */
export const AmiInputStyles = makeStyles((theme) => ({
  holder: {
    backgroundColor: "#6D7F9B",
    width: "70%",

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
}));
