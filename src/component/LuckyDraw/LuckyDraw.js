import React from "react";

import luckyDrawBefore from "../../assets/luckyDraw/lucky-draw-before.gif";
import luckyDrawAfter from "../../assets/luckyDraw/lucky-draw-after.gif";

const LuckyDraw = (props) => {
  if (!props.isClicked) {
    return <img src={luckyDrawBefore} alt="Lucky Draw" />;
  }

  if (props.isClicked) {
    return <img src={luckyDrawAfter} alt="Lucky Draw" />;
  }
};

export default LuckyDraw;
