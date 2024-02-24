import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  // to pass info of which player is active
  // to both Player and GameBoard
  // initial active player is 'X'
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    // if active player is x, change it into o, or vice versa
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
