import * as React from "react";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifycontent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 2 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <LinkTab label="Patient dashboard" href="/#" />
      </MenuItem>
      <MenuItem>
        <LinkTab label="Analytics" href="/#" />
      </MenuItem>
      <MenuItem>
        <LinkTab label="Admin" href="/#" />
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}></MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            AMI CDS Application
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* ************************* */}
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
              >
                <LinkTab label="Patient dashboard" href="/#" />
                <LinkTab label="Analytics" href="/#" />
                <LinkTab label="Admin" href="/#" />
              </Tabs>
            </Box>
            {/* ********************** */}
            {/* <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="User Details" {...a11yProps(0)} />
                  <Tab label="Demographics" {...a11yProps(1)} />
                  <Tab label="Immunization" {...a11yProps(2)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <h1>Some Heading - 1</h1>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <h1>Some Heading - 2</h1>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <h1>Some Heading - 3</h1>
              </TabPanel>
            </Box> */}
            {/* ********************** */}

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src="data:image/png;base64,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" />
            </IconButton>
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
