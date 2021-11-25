// import { AppBar } from "../../shared/material/mui";
// import { ToolBar } from "../../shared/material/mui";
// import { Badge } from "../../shared/material/mui";
// import { Avatar } from "../../shared/material/mui";
// import { Menu } from "../../shared/material/mui";
// import { MenuItem } from "../../shared/material/mui";
// import { InputBase } from "../../shared/material/mui";

// import { SearchIcon } from "../../shared/material/mui-icons";
// import { MailIcon } from "../../shared/material/mui-icons";
// import { NotificationsIcon, PersonIcon } from "../../shared/material/mui-icons";
// import { makeStyles, alpha } from "@material-ui/core";

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import React from "react";

// const useStyles = makeStyles((theme) => ({
//   desktop: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   mobile: {
//     display: "block",
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   mobile_btn: {
//     textDecoration: "none",
//     textAlign: "center",
//     padding: "3px",
//     outline: "none",
//     borderRadius: "5px",
//     boxShadow: "0 1px 4px rgba(0, 0, 0, .6)",
//     color: " #ecf0f1",
//     minWidth: "70px",
//     display: "block",
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.down("sm")]: {
//       display: (props) => (props.open ? "flex" : "none"),
//     },
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
//   icons: {
//     alignItems: "center",
//     display: "flex",
//   },
//   searchbutton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
// }));

// function Footer(props) {
//   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const classes = useStyles({ open });

//   function HandleClick(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar className={classes.bottom}>
//       <ToolBar className={classes.toolbar}>
//         <>
//           <Link className={classes.mobile_btn} to="/registeruser">
//             SignUp
//           </Link>
//           <Link className={classes.mobile_btn} to="/login">
//             SignIn
//           </Link>
//         </>
//         <>
//           <div className={classes.icons}>
//             <Avatar onClick={HandleClick} alt="A" src="/images/user.png" />
//             <Menu
//               className="mtop"
//               id="simple-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//             ></Menu>
//           </div>
//         </>
//       </ToolBar>
//     </AppBar>
//   );
// }
// export default Footer;

import React from "react";
import "./styles/HeaderFooter.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        <img
          className="logo"
          position="relative"
          width="140px"
          src="https://logovtor.com/wp-content/uploads/2021/06/beckman-coulter-inc-logo-vector.png"
        />
        <p>Terms Of Service | Privacy</p>
      </div>
    </div>
  );
}

export default Footer;
