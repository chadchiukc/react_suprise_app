import React, { useState, useContext } from "react";
import classes from "./MainPage.module.css";
import DateCountDown from "../shared/util/DateCountDown";
import Button from "../shared/FormElements/Button";
import Modal from "../shared/components/UIElements/Modal";
import HammSpin from "../component/HammSpin";
import { BDAYContext } from "../shared/context/BDayContext";

//http://worldtimeapi.org/api/timezone/Asia/Hong_Kong

const MainPage = (props) => {
  const [isBDay, setIsBDAY] = useContext(BDAYContext);
  const [isClicked, setIsClicked] = useState(false);

  const changeBDayHandler = () => {
    setIsBDAY(true);
  };

  let inputHandler = () => {
    setIsClicked(true);
  };

  if (isBDay) {
    inputHandler = () => {
      props.history.push("/Hamm");
    };
  }

  const closeModalHanlder = () => {
    setIsClicked(false);
  };

  // const [checkState, dispatch] = useReducer(controlReducer, {
  //   isBDay: false,
  //   isClicked: false,
  // });
  return (
    <>
      {!BDAYContext.isBDay && (
        <Modal
          style={{ fontFamily: "Noto Sans TC" }}
          open={isClicked}
          onCancel={closeModalHanlder}
          header="警告!!"
          children="未夠鐘...唔好咁心急!!"
          footer={
            <Button danger onClick={closeModalHanlder}>
              返回
            </Button>
          }
        />
      )}
      <div className={classes.Hamm}>
        <h1>
          JoJo's Birthday
          <br /> till....
        </h1>
        <DateCountDown
          endDate="2021-09-11T00:00:00"
          checkCountDown={changeBDayHandler}
        />
        <HammSpin />
        <Button inverse onClick={inputHandler}>
          Enter for Birthday LUCKY DRAW!
        </Button>
      </div>
    </>
  );
};

export default MainPage;
