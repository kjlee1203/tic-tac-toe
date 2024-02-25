import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function deriveActivePlayer(gameTurns) {
  // get active player from game turns:
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // to make a log. but the info is generated in GameBoard
  // need to lift the state up
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  /* We now derive active player from gameTurns, we dont need this anymore:
  // to pass info of which player is active
  // to both Player and GameBoard
  // initial active player is 'X'
  const [activePlayer, setActivePlayer] = useState("X");
  */

  function handleSelectSquare(rowIndex, colIndex) {
    // if active player is x, change it into o, or vice versa
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      /*
      // current player is X in the first turn.
      let currentPlayer = "X";
      // latest turn is stored in [0] of the array.
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      */
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns; // update gameTurns state.
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
