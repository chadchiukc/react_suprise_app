import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`${classes.button} ${props.className} ${
          props.big && `${classes.button_big}`
        } ${props.small && `${classes.button_small}`} ${
          props.inverse && classes.button_inverse
        } ${props.danger && classes.button_danger}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${classes.button} ${props.className} ${
          props.big && `${classes.button_big}`
        } ${props.small && `${classes.button_small}`} ${
          props.inverse && classes.button_inverse
        } ${props.danger && classes.button_danger}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${classes.button} ${props.className} ${
        props.big && `${classes.button_big}`
      } ${props.small && `${classes.button_small}`} ${
        props.inverse && classes.button_inverse
      } ${props.danger && classes.button_danger}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
