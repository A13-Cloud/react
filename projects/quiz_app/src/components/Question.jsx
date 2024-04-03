import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

function Question (
  {
    questionText,
    answers,
    answerState,
    selectedAnswer,
    onSelectAnswer,
    onSkipAnswer
  }
) {

  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answerState={answerState}
        onSelect={onSelectAnswer}
        answers={answers}
        selectedAnswer={selectedAnswer}
      />
    </div>
  )
}

export default Question;