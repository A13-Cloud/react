import { useState, useEffect } from "react";

function QuestionTimer ({timeout, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const cleanTimeout = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(cleanTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const cleanInterval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(cleanInterval);
    };
  }, []);

  return (
    <progress
      max={timeout}
      className={mode}
      id="question-time"
      value={remainingTime}
    />
  );
}

export default QuestionTimer;