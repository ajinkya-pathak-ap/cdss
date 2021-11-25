import { makeStyles } from "@material-ui/core";
import { Container } from "../../shared/material/mui";
import {
  HomeIcon,
  AccessibilityIcon,
  ArchiveIcon,
  DashboardIcon,
  GroupIcon,
  ListAltIcon,
  PermContactCalendarIcon,
  ReceiptIcon,
  DetailsIcon,
  ContactPhoneIcon,
} from "../../shared/material/mui-icons";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./styles/Navigation.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  WorkOutline,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    borderRadius: "5px",
    marginLeft: "5px",
    backgroundColor: "#fff",
    position: "fixed",
    paddingTop: theme.spacing(4),
    top: "75px",

    [theme.breakpoints.up("sm")]: {
      maxWidth: "210px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "60px",
    },
  },
  item: {
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  icon: {
    color: "#fff",
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  text: {
    fontSize: "13px",
    marginBottom: "0",
    color: "#fff",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headerText: {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  HeaderColor: {
    background: "#fff",
    borderRadius: "3px",
    padding: "5px",
  },
}));

function SideNav(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className="sideNav">
        <div className={classes.item}>
            <DashboardIcon className={classes.icon} />
            <p className={classes.text}>Dashboard</p>
        </div>
      </div>
    </Container>
  );
}

export default SideNav;
// export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
