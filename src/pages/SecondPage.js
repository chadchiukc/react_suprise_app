import React from "react";
import HammPic from "../component/HammPic";
import classes from "./SecondPage.module.css";

const SecondPage = (props) => {
  return (
      <div className={classes.background}>
        <HammPic />
      </div>
  );
};

export default SecondPage;
