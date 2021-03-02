import React, { useState, useEffect } from "react";
import luckyDrawBefore from "../assets/luckyDraw/lucky-draw-before.gif";
import luckyDrawAfter from "../assets/luckyDraw/lucky-draw-after.gif";
import classes from "./LuckyDraw.module.css";
const LuckyDraw = (props) => {
  const [isClick, setIsClick] = useState(false);

  const onClickHandler = () => setIsClick(true);

  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    if (isClick) {
      const interval = setInterval(() => {
        setIsDraw(true);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isClick]);

  let msg = <h1>準備好抽獎了嗎????</h1>;
  if (isDraw) {
    msg = (
      <div style={{marginTop: '5px'}}>
        <h4 style={{fontFamily: "Gloria Hallelujah"}}>WOW!!</h4>
        <h1>恭喜!!抽中特大獎IPHONE12!!</h1>
        <h4>請聯絡趙家進換取獎品</h4>
        <h4>兌換密碼:趙家進愛你一生一世</h4>
      </div>
    );
  }
  return (
    <div className={classes.background}>
      <div className={classes.background__msg}>{msg}</div>
      <img
        src={isClick ? luckyDrawAfter : luckyDrawBefore}
        alt="Lucky Draw"
        onClick={onClickHandler}
      />
    </div>
  );
};

export default LuckyDraw;
