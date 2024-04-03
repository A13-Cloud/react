import { useState, useEffect } from "react";

function QuestionTimer ({timeout, onTimeout, answerState}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setTimeout");
    const cleanTimeout = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(cleanTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setInterval");
    const cleanInterval = setInterval(() => {
      // console.log("INTO INTERVAL");
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(cleanInterval);
    };
  }, []);

  return <progress style={{backgroundColor: answerState === "wrong" ? "red" : "green"}} id="question-time" value={remainingTime} max={timeout}/>
}

export default QuestionTimer;