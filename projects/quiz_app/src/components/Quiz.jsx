import { useCallback, useState } from "react";

import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";

import Question from "./Question.jsx";

function Quiz () {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex= userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer (selectedAnswer) {
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });
    }, []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Thropy icon"/>
        <h2>Quiz completed!</h2>
      </div>
    )
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  )
}

export default Quiz;