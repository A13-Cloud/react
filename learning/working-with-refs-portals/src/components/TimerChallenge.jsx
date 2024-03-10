import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge ({title, targetTime}) {
  let timerRef = useRef();
  let dialogRef = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);

  const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerIsActive <= 0) {
    clearInterval(timerRef.current);
    // setTimerRemaining(targetTime * 1000);
    dialogRef.current.open();
  }

  function handleStart () {
    timerRef.current = setInterval(() => {
      setTimerRemaining(prevTimerRemaining => prevTimerRemaining - 10);
    }, 10);
  }

  function handleStop () {
    dialogRef.current.open();
    clearInterval(timerRef.current);
  }

  return (
    <>
      <ResultModal ref={dialogRef} targetTimer={targetTime} result="lost"/>
      <section className="challenge">
        <h2>{title}</h2>
        {timerIsActive && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}