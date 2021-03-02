import React, { useState, useEffect } from "react";
import classes from "./DateCountDown.module.css";

const DateCountDown = (props) => {
  const [timeState, setTimeState] = useState({
    days: 99,
    hours: 99,
    min: 99,
    sec: 99,
  });

  const { endDate, checkCountDown } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      const date = calculateCountdown(endDate);
      if (!date) {
        checkCountDown();
      }
      date ? setTimeState(date) : clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate, checkCountDown]);

  const calculateCountdown = (countDate) => {
    let diff =
      (Date.parse(new Date(countDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  const addLeadingZeros = (value) => {
    value = String(value);
    if (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  return (
    <div className={classes.countDown} style={props.style}>
      <span className={classes.countDown_col}>
        <span className={classes.countDown_col_element}>
          <strong>{addLeadingZeros(timeState.days)}</strong>
          <span>{timeState.days === 1 ? "Day" : "Days"}</span>
        </span>
      </span>

      <span className={classes.countDown_col}>
        <span className={classes.countDown_col_element}>
          <strong>{addLeadingZeros(timeState.hours)}</strong>
          <span>{timeState.hours === 1 ? "Hour" : "Hours"}</span>
        </span>
      </span>

      <span className={classes.countDown_col}>
        <span className={classes.countDown_col_element}>
          <strong>{addLeadingZeros(timeState.min)}</strong>
          <span>Min</span>
        </span>
      </span>

      <span className={classes.countDown_col}>
        <span className={classes.countDown_col_element}>
          <strong>{addLeadingZeros(timeState.sec)}</strong>
          <span>Sec</span>
        </span>
      </span>
    </div>
  );
};

export default DateCountDown;
