import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(
  function ResultModal ({targetTimer, remainingTime, onReset}, ref) {
    const imperativeDialogRef = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTimer * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          imperativeDialogRef.current?.showModal();
        }
      };
    })

    return (
      <dialog ref={imperativeDialogRef} className="result-modal">
        {userLost && <h2>You Lost!</h2>}
        {!userLost && <h2>Your Score {score}</h2>}
        <p>The target time was <strong>{targetTimer} seconds</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} second left</strong></p>
        <form method="dialog">
          <button onClick={onReset}>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;