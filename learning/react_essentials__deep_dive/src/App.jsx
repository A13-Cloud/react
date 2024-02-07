import React, { useState } from "react";

import Player from "./component/Player.jsx";
import GameBoard from "./component/GameBoard.jsx";
import Log from "./component/Log.jsx";
import { WINING_COMBINATIONS } from "./wining-cambiations.js";
import GameOver from "./component/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer (gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", Y: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer =  deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (let turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (let combinations of WINING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].col];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare (rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        }, ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart () {
    setGameTurns([]);
  }

  function handlePlayerNameChange (symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        symbol: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}
export default App;
