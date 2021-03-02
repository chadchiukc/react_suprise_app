import React from "react";
import logo from "../assets/logo.svg";
import classes from "./HammSpin.module.css";

const HammSpin = (props) => {
  return <img src={logo} className={classes.HammLogo} alt="logo" />;
};

export default HammSpin;
