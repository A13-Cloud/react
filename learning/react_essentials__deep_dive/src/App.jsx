import React, { useState } from "react";

import Player from "./component/Player.jsx";
import GameBoard from "./component/GameBoard.jsx";
import Log from "./component/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare (rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (gameTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        {
          square: {row: rowIndex, col: colIndex},
          player: currentPlayer,
        }, ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log/>
    </main>
  )
}
export default App;
