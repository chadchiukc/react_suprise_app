import React, { useState } from "react";
import Hamm from "../assets/Hamm.png";
import HammWH from "../assets/HammWithHat.png";
import HammWBH from "../assets/HammWithBHat.png";
import HammWC from "../assets/HammWithClothes.png";
import HammWCa from "../assets/HammWC.png";
import classes from "./HammPic.module.css";
import { withRouter } from "react-router-dom";

const HammPic = (props) => {
  const [clickHamm, setClickHamm] = useState(0);
  let textMsg = "媽媽，抽獎之前粉豬豬有野想送比你！呀...媽媽幫我除左頂帽先";
  let logo = HammWH;
  let pressHandler = () => {
    setClickHamm((prevstate) => prevstate + 1);
  };
  if (clickHamm === 1) {
    logo = Hamm;
    textMsg = "幫我帶第二頂帽!!";
  }
  if (clickHamm === 2) {
    logo = HammWBH;
    textMsg = "著返件衫先....";
  }
  if (clickHamm === 3) {
    logo = HammWC;
    textMsg = "為左著呢件衫....粉豬豬減左好耐肥....媽媽! 準備好了嗎??";
  }
  if (clickHamm === 4) {
    logo = HammWCa;
    textMsg =
      "生日快樂媽媽!!媽媽可以去抽獎了，但係老豆好似要你答完問題先可以抽獎。。。";
    pressHandler = () => {
      props.history.push("/questions");
    };
  }

  return (
    <>
      <div className={classes.dialog}>{textMsg}</div>
      <img
        src={logo}
        alt="Hamm"
        style={{ height: "400px", width: "auto" }}
        onClick={pressHandler}
      />
    </>
  );
};

// export default HammPic;
export default withRouter(HammPic);
