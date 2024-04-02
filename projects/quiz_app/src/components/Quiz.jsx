import {useCallback, useState} from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";

function Quiz () {

  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer (selectedAnswer) {
    console.log("Quiz ---> handleSelectAnswer");
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);

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
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li className="answer" key={answer}>
                <button onClick={() => handleSelectAnswer(answer)}>
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