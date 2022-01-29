import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BarChartIcon from "@mui/icons-material/BarChart";
import EditIcon from "@mui/icons-material/Edit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  },
  flexBalancer: {
    flex: 1,
  },
  links: {
    display: "flex",
    alignItems: "center",
    right: 0,
    lineHeight: "40px",
    flex: 1,
    justifyContent: "flex-end",
    "& > *": {
      marginRight: 10,
      padding: "0 8px",
    },
  },
  menuButton: {
    display: "flex",
    alignItems: "center",
    lineHeight: "40px",
    flex: 1,
    justifyContent: "flex-end",
  },
  link: {
    whiteSpace: "nowrap",
  },
  menuLink: {
    textDecoration: "none",
    textColor: "black",
    color: "black",
  },
  menuItem: {},
}));
const Navbar = () => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    console.log("window.innerWidth", window.innerWidth);

    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  // create an event listener
  useEffect(() => handleResize(), []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  return (
    <nav className={classes.navbar}>
      <div className={classes.flexBalancer}></div>
      <h1>Don't worry, I'll pick it for you</h1>

      {isMobile ? (
        <Box className={classes.menuButton}>
          <IconButton
            color="secondary"
            aria-label="Add new value"
            size="large"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="/RLMPicker/picker" className={classes.menuLink}>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <AutoAwesomeIcon style={{ paddingRight: 3 }} />
                Picker
              </MenuItem>
            </Link>
            <Link className={classes.menuLink} to="/RLMPicker/modify-data">
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <EditIcon style={{ paddingRight: 3 }} />
                Modify Data
              </MenuItem>
            </Link>
            <Link className={classes.menuLink} to="/RLMPicker/anal">
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <BarChartIcon style={{ paddingRight: 3 }} />
                Analysis
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      ) : (
        <Box className={classes.links}>
          <Link to="/RLMPicker/picker" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Picker</Button>
          </Link>
          <Link
            className={classes.link}
            to="/RLMPicker/modify-data"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained">Modify Data</Button>
          </Link>
          <Link
            className={classes.link}
            to="/RLMPicker/anal"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="secondary">
              Analysis
            </Button>
          </Link>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;
