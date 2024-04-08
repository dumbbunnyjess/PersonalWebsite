import React, { useEffect, useState } from "react";
import Tile from "./tile";
import {
  printBoard,
  createInitialBoard,
  checkWin,
  checkLoss,
} from "../engine/minesweeperEngine";

function Board() {
  const [board, setBoard] = useState(createInitialBoard());

  useEffect(() => {
    printBoard(board);
  });

  const handleTileClick = (rowIndex, colIndex) => {
    // Clone the current board state
    const newBoard = [...board];
    newBoard[rowIndex][colIndex].isRevealed = true;

    if (newBoard[rowIndex][colIndex].isMine) {
      console.log("YOU LOSE");
      newBoard[rowIndex][colIndex].isMine = true;
    } else {
      newBoard[rowIndex][colIndex].isRevealed = true;
    }
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.flat().map((tile, index) => {
        const colIndex = index % 8;
        const rowIndex = Math.floor(index / 8);
        const isEvenPosition = (rowIndex + colIndex) % 2 === 0;
        const tileClass = isEvenPosition ? "tile1" : "tile2";
        return (
          <Tile
            key={index}
            className={tileClass}
            isMine={tile.isMine}
            isRevealed={tile.isRevealed}
            isFlagged={tile.isFlagged}
            onClick={() => handleTileClick(Math.floor(index / 8), colIndex)}
          />
        );
      })}
    </div>
  );
}

export default Board;
