import React from "react";
import logo from "../assets/logo.svg";
import classes from "./hamm.module.css";
import { NavLink } from "react-router-dom";

const Hamm = (props) => {
  return (
    <div className={classes.Hamm}>
      <NavLink to="/Questions">
        <img src={logo} className={classes.HammLogo} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Hamm;
