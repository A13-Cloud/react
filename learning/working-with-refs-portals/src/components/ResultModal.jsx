import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(
  function ResultModal ({targetTimer, remainingTime, onReset}, ref) {
    const imperativeDialogRef = useRef();

    let userLost = remainingTime <= 0;
    let formattedRemainingTime = (remainingTime / 1000).toFixed(2);

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