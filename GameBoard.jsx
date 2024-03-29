import { useState } from "react";
/* lifted up to  App.jsx
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
*/
//export default function GameBoard({ onSelectSquare, turns }) {
export default function GameBoard({ onSelectSquare, board }) {
  // make gameBoard from the log (turns)
  // I think it can prevent multiple clicks on the same square because
  // turns (log) goes from newest to oldest
  // so eventually the sign returns to original (oldest) one

  /* lifted up to App.jsx

  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
*/

  //export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  // we'll lift the state up to App.jsx
  // because this info is needed both for GameBoard and log.

  /*
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // prevGameBoard[rowIndex][colIndex] = "X"; is  not recommended.
      // make copy using '...'
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedBoard;
    });
    onSelectSquare(); // comming from App.jsx
  }
*/
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
