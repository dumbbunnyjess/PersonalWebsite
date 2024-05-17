import React, { useEffect, useState } from "react";
import CustomHeader from "./header";
import Board from "./board";
import Footer from "./footer";
import { createInitialBoard } from "../engine/minesweeperEngine";
import ResetButton from "./resetButton";
import { printBoard, checkWin, checkLoss } from "../engine/minesweeperEngine";

function Minesweeper() {
  const [board, setBoard] = useState(createInitialBoard());
  const [firstMoveMade, setFirstMoveMade] = useState(false);

  // /**
  //  * Handles the click event on a tile, revealing it, and checking for a mine.
  //  * Triggers recursive revealing of adjacent tiles if the clicked tile has no adjacent mines.
  //  * @param {Object[][]} board - The current state of the Minesweeper board.
  //  * @param {number} rowIndex - The row index of the clicked tile.
  //  * @param {number} colIndex - The column index of the clicked tile.
  //  * @param {function} setBoard - React's setState function for updating the board.
  //  */
  const handleTileClick = (rowIndex, colIndex) => {
    if (!firstMoveMade) {
      printBoard(board);
      const newBoard = [...board];
      setFirstMoveMade(true);
      checkTile(newBoard, rowIndex, colIndex);
      setBoard([...board]);
    } else {
      printBoard(board);
      const newBoard = [...board];
      checkTile(newBoard, rowIndex, colIndex);
      setBoard([...board]);
    }
  };

  const checkTile = (board, rowIndex, colIndex) => {
    const tile = board[rowIndex][colIndex];
    tile.isRevealed = true;
    if (tile.isMine) {
      console.log("YOU LOSE");
    } else {
      revealAdjacentTiles(board, rowIndex, colIndex);
    }
  };

  /**
   * Handles the right-click event on a tile, toggling the flag on or off.
   * This function prevents the default browser context menu from appearing,
   * checks if the clicked tile has not been revealed, and toggles the flag status
   * of the tile. The updated board state is then set to trigger a re-render.
   *
   * @param {Array} board - The current state of the Minesweeper board as a 2D array.
   * @param {number} rowIndex - The row index of the tile that was right-clicked.
   * @param {number} colIndex - The column index of the tile that was right-clicked.
   * @param {Function} setBoard - The React setState function for updating the board state.
   * @param {Event} event - The event object from the right-click action.
   */
  function handleRightClick(rowIndex, colIndex) {
    const newBoard = [...board];
    const tile = newBoard[rowIndex][colIndex];

    if (!tile.isRevealed) {
      if (tile.isFlagged) {
        tile.isFlagged = false;
      } else {
        tile.isFlagged = true;
      }
      setBoard(newBoard);
    }
  }

  /**
   * Recursively reveals adjacent tiles that do not contain mines and have no adjacent mines.
   * Stops recursion at tiles that are adjacent to mines but not mines themselves.
   * @param {Object[][]} board - The current state of the Minesweeper board.
   * @param {number} row - The row index of the current tile.
   * @param {number} col - The column index of the current tile.
   */
  function revealAdjacentTiles(board, row, col) {
    const directions_for_zero_adjacent_tiles = [
      [1, -1], // Left top
      [0, -1], // Left middle
      [-1, -1], // Left bottom
      [-1, 0], // Middle top
      [1, 1], // Right bottom
      [0, 1], // Right middle
      [-1, 1], // Right top
      [1, 0], // Middle down
    ];

    const currentTile = board[row][col];
    if (currentTile.adjacentMines === 0) {
      directions_for_zero_adjacent_tiles.forEach(([dx, dy]) => {
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
  }

  const resetBoard = () => {
    setBoard(createInitialBoard());
    setFirstMoveMade(false);
  };

  return (
    <div>
      <CustomHeader />
      <div className="main-content">
        <div className="fixed-page-height-container">
          <div className="app-container">
            <Board
              board={board}
              onTileClick={handleTileClick}
              handleRightClick={handleRightClick}
            />
            <ResetButton onReset={resetBoard} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Minesweeper;
