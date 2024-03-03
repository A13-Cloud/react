import { useRef, useState } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);


  function handleClick () {
    setEnteredPlayerName(playerNameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
