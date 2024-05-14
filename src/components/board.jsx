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
  }, [board]);

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
            onClick={() => handleTileClick(board, rowIndex, colIndex, setBoard)}
          />
        );
      })}
    </div>
  );
}

export default Board;

/**
 * Recursively reveals adjacent tiles that do not contain mines and have no adjacent mines.
 * Stops recursion at tiles that are adjacent to mines but not mines themselves.
 * @param {Object[][]} board - The current state of the Minesweeper board.
 * @param {number} row - The row index of the current tile.
 * @param {number} col - The column index of the current tile.
 */
function revealAdjacentTiles(board, row, col) {
  const directions = [
    [0, -1], // Left
    [-1, 0], // Up
    [0, 1], // Right
    [1, 0], // Down
  ];

  directions.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;

    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const tile = board[newRow][newCol];
      if (!tile.isRevealed && !tile.isMine) {
        tile.isRevealed = true;
        if (tile.adjacentMines === 0) {
          revealAdjacentTiles(board, newRow, newCol);
        }
      }
    }
  });
}

/**
 * Handles the click event on a tile, revealing it, and checking for a mine.
 * Triggers recursive revealing of adjacent tiles if the clicked tile has no adjacent mines.
 * @param {Object[][]} board - The current state of the Minesweeper board.
 * @param {number} rowIndex - The row index of the clicked tile.
 * @param {number} colIndex - The column index of the clicked tile.
 * @param {function} setBoard - React's setState function for updating the board.
 */
function handleTileClick(board, rowIndex, colIndex, setBoard) {
  const newBoard = [...board];
  const tile = newBoard[rowIndex][colIndex];
  tile.isRevealed = true;

  if (tile.isMine) {
    console.log("YOU LOSE");
    // Potentially update the state to reflect game over
  } else {
    revealAdjacentTiles(newBoard, rowIndex, colIndex);
  }

  setBoard(newBoard);
}
