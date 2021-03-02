import React, { useReducer } from "react";
import Question from "../component/Question/Question";
import Hamm from "../assets/hampig.png";
import MeiMei from "../assets/MeiMei.png";
import PuPu from "../assets/PuPu.png";
import Chad from "../assets/Chad.png";

import classes from "./Questions.module.css";
import Button from "../shared/FormElements/Button";
import Modal from "../shared/components/UIElements/Modal";

const questionReducer = (state, action) => {
  switch (action.type) {
    case "SELECTED":
      let allAns = true;
      for (const key in state.question) {
        if (key === action.inputId) {
          allAns = allAns && true;
        } else {
          allAns = allAns && state.question[key].selected;
        }
      }
      return {
        ...state,
        allAns: allAns,
        question: {
          ...state.question,
          [action.inputId]: {
            ...state.question[action.inputId],
            selected: action.value,
          },
        },
      };
    case "SUBMITTED":
      return {
        ...state,
        allCorrect: action.result,
        submitted: true,
      };
    case "CLOSED":
      return {
        ...state,
        submitted: false,
      };
    case "ALLANSWER":
      return {
        ...state,
        allAns: true,
      };
    default:
      return state;
  }
};
const QUESTIONS = [
  {
    id: "q1",
    question: "粉豬豬會選擇以下那一款食物？",
    by: "HAMM",
    imageURL: Hamm,
    choices: { 1: "炸雞排", 2: "炸豬排", 3: "全都要" },
    ans: 3,
  },
  {
    id: "q2",
    question: "下列何人最誰？",
    by: "CHAD",
    imageURL: Chad,
    choices: { 1: "李敏鎬", 2: "李鍾碩", 3: "CHAD" },
    ans: 3,
  },
  {
    id: "q3",
    question: "妹妹豬最喜歡以下那一款包？",
    by: "MEIMEI",
    imageURL: MeiMei,
    choices: { 1: "腸仔包", 2: "豬排包", 3: "名牌包包" },
    ans: 3,
  },
  {
    id: "q4",
    question: "仔仔最希望以下那一天玩機動遊戲？",
    by: "PUPU",
    imageURL: PuPu,
    choices: { 1: "星期六", 2: "星期二", 3: "每一天" },
    ans: 3,
  },
];

const initialState = {
  allCorrect: false,
  submitted: false,
  allAns: false,
  question: QUESTIONS.reduce((result, cur) => {
    result[cur.id] = { selected: "", ans: cur.ans };
    return result;
  }, {}),
};

const Questions = (props) => {
  const [ansState, dispatch] = useReducer(questionReducer, initialState);

  const onChangeHandler = (event) =>
    dispatch({
      type: "SELECTED",
      inputId: event.target.name,
      value: event.target.value,
    });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let result = true;
    for (const key in ansState.question) {
      result =
        result &&
        ansState.question[key].ans === +ansState.question[key].selected;
    }
    console.log(result);
    dispatch({ type: "SUBMITTED", result: result });
  };

  const onCloseHandler = () => {
    dispatch({ type: "CLOSED" });
  };

  return (
    <>
      <Modal
        open={ansState.submitted}
        header={ansState.allCorrect ? "恭喜!" : "答錯左..."}
        headerClass={classes.questions__modal}
        contentClass={classes.questions__modal}
        children={
          ansState.allCorrect
            ? "全部問題都答中晒!!"
            : ansState.question.q2.selected !== "3"
            ? "請用你既良心回答第二條答案!"
            : "請再檢查一下答案..."
        }
        footer={
          ansState.allCorrect ? (
            <Button to="/lucky-draw" className={classes.questions__button}>
              GO TO LUCKY DRAW!!
            </Button>
          ) : (
            <Button
              danger
              onClick={onCloseHandler}
              className={classes.questions__button}
            >
              Again
            </Button>
          )
        }
      />
      <div className={classes.questions}>
        <form onSubmit={onSubmitHandler}>
          {QUESTIONS.map((question) => (
            <Question
              key={question.id}
              question={question}
              onChange={onChangeHandler}
            />
          ))}
          <Button type="submit" disabled={!ansState.allAns}>
            提交答案!
          </Button>
        </form>
      </div>
    </>
  );
};

export default Questions;
