import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

import classes from "./Question.module.css";

const Question = (props) => {
  return (
    <Card className={classes.question}>
      <div className={classes.question__imageCol}>
        <Avatar
          image={props.question.imageURL}
          className={classes.question__imageCol_img}
          alt={props.question.by}
        />
        <div className={classes.question__imageCol_div}>
          提問者: {props.question.by}
        </div>
      </div>
      <div className={classes.question__imageCol_questionBlock}>
        <span>Q: {props.question.question}</span>
        <p className={classes.question__imageCol_questionBlock_answer}>
          A:{" "}
          {Object.keys(props.question.choices).map((choiceId) => (
            <label key={choiceId}>
              <input
                type="radio"
                name={props.question.id}
                value={+choiceId}
                onChange={props.onChange}
              />
              {props.question.choices[choiceId]}
            </label>
          ))}
        </p>
      </div>
    </Card>
  );
};

export default Question;