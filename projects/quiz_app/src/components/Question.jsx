import { useState } from "react";

import QUESTION from "../question.js";

import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

function Question ({ questionIndex, onSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null
  });

  function handleSelectAnswer (answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[questionIndex].answers[0] === answer
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTION[questionIndex].text}</h2>
      <Answers
        answerState={answerState}
        onSelect={handleSelectAnswer}
        selectedAnswer={answer.selectedAnswer}
        answers={QUESTION[questionIndex].answers}
      />
    </div>
  )
}

export default Question;