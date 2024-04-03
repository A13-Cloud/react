import { useState, useEffect } from "react";

function QuestionTimer ({timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const cleanTimeout = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(cleanTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const cleanInterval = setInterval(() => {
      // console.log("INTO INTERVAL");
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(cleanInterval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout}/>
}

export default QuestionTimer;