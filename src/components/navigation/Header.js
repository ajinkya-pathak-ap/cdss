import { AppBar } from "../../shared/material/mui";
import { ToolBar } from "../../shared/material/mui";
import { Avatar } from "../../shared/material/mui";
import { Menu } from "../../shared/material/mui";
import { MenuItem } from "../../shared/material/mui";
import { makeStyles, alpha } from "@material-ui/core";
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  desktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  mobile: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile_btn: {
    textDecoration: "none",
    textAlign: "center",
    padding: "3px",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "0 1px 4px rgba(0, 0, 0, .6)",
    backgroundColor: "#2ecc71",
    color: " #ecf0f1",
    minWidth: "70px",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  icons: {
    alignItems: "center",
    display: "flex",
  },
  searchbutton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Header(props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles({ open });

  function HandleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  function Logout() {
    handleClose();
  }

  function userProfile() {
    handleClose();
  }

  return (
    <AppBar position="fixed">
      <ToolBar className={classes.toolbar}>
        <h3 className={classes.desktop}>CDSS Prototype</h3>
        <h3 className={classes.mobile}>B.C</h3>
        <div className={classes.icons}>
          <Avatar onClick={HandleClick} alt="alt" />
          <Menu
            className="mtop"
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
          >
            <MenuItem onClick={userProfile}>Profile</MenuItem>
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </Menu>
        </div>
      </ToolBar>
    </AppBar>
  );
}
export default Header;
