import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    lineHeight: 40,
    boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: 16,
  },
  links: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: 0,
    lineHeight: "40px",
    "& > *": {
      marginRight: 15,
      padding: "0 8px",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <h1>Don't worry, I'll pick it for you</h1>
      <div className={classes.links}>
        <Link to="/">Picker</Link>
        <Link
          to="/modify-data"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Modify Data
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
