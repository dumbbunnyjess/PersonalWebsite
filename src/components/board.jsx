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

  const revealAdjacentTiles = (row, col) => {
    // Directions for orthogonal neighbors: up, right, down, left
    const newBoard = [...board];
    const directions = [
      [0, -1], // Left
      [-1, 0], // Up
      [0, 1], // Right
      [1, 0], // Down
    ];

    directions.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;

      // Check if the new position is within the board bounds
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        const tile = newBoard[newRow][newCol];

        // If the tile is not revealed, not a mine, and has no adjacent mines, reveal it
        if (!tile.isRevealed && !tile.isMine && tile.adjacentMines === 0) {
          newBoard[newRow][newCol].isRevealed = true;

          // Recursively reveal adjacent tiles for this tile
          revealAdjacentTiles(newBoard, newRow, newCol);
        } else if (!tile.isRevealed) {
          // If the tile is not a mine but has adjacent mines, just reveal this tile without recursion
          newBoard[newRow][newCol].isRevealed = true;
        }
      }
    });
    setBoard(newBoard);
  };

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
    revealAdjacentTiles(rowIndex, colIndex);
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
            adjacentMines={tile.adjacentMines}
            orthMines={tile.orthAdjacentMines}
            onClick={() => handleTileClick(Math.floor(index / 8), colIndex)}
          />
        );
      })}
    </div>
  );
}

export default Board;
