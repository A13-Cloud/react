import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge ({title, targetTime}) {
  let timerRef = useRef();
  let dialogRef = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpire] = useState(false);


  function handleStart () {
    timerRef.current = setTimeout(() => {
      setTimerExpire(true);
      dialogRef.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop () {
    clearTimeout(timerRef.current);
  }

  return (
    <>
      <ResultModal ref={dialogRef} result="lost" targetTimer={targetTime}/>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}