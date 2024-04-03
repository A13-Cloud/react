import {useCallback, useState} from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";

function Quiz () {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex= answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer (selectedAnswer) {
    console.log("Quiz ---> handleSelectAnswer");
    setAnswerState("answered");
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Thropy icon"/>
        <h2>Quiz completed!</h2>
      </div>
    )
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  console.log("Quiz");
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          key={activeQuestionIndex}
          answerState={answerState}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }

            if ((answerState === "correct" || answerState === "wrong") && isSelected) {
              cssClass = answerState;
            }

            return (
              <li className="answer" key={answer}>
                <button
                  className={cssClass}
                  onClick={() => handleSelectAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Quiz;