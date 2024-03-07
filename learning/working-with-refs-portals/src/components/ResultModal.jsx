import { forwardRef } from "react";

const ResultModal = forwardRef(
  function ResultModal ({result, targetTimer}, ref) {

    return (
      <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTimer} seconds</strong></p>
        <p>You stopped the timer with <strong>X second left</strong></p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;