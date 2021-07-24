import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
    marginBottom: 16,
  },
  flexBalancer: {
    flex: 1,
  },
  links: {
    display: "flex",
    alignItems: "center",
    right: 0,
    lineHeight: "40px",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "flex-end",
    "& > *": {
      marginRight: 10,
      padding: "0 8px",
    },
  },
  link: {
    whiteSpace: "nowrap",
  },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className={classes.flexBalancer}></div>
      <h1>Don't worry, I'll pick it for you</h1>
      <div className={classes.links}>
        <Link to="/" className={classes.link}>
          Picker
        </Link>
        <Link
          className={classes.link}
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
