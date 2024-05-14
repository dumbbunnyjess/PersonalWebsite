import React, { useEffect, useState } from "react";
import Tile from "./tile";
import {
  printBoard,
  createInitialBoard,
  checkWin,
  checkLoss,
} from "../engine/minesweeperEngine";

/**
 * Board component is essentially the central hub where the front-end (user interface)
 * interacts with the underlying game logic (game engine).
 */
function Board() {
  const [board, setBoard] = useState(createInitialBoard()); // initializes logical board

  useEffect(() => {
    printBoard(board); // prints the board to the console
  }, [board]);

  return (
    // returns physical representation of the logical board
    <div className="board">
      {" "}
      {/** HTML container for board */}
      {board.flat().map((tile, index) => {
        // Flattens 2d array into 1d array */
        const colIndex = index % 8; // calculates column's index based on tile's index
        const rowIndex = Math.floor(index / 8); // calculates the row's index based on the tile's index
        const isEvenPosition = (rowIndex + colIndex) % 2 === 0; // calculates if the tile is in an even position
        const tileClass = isEvenPosition ? "tile1" : "tile2"; // Assigns a CSS class based on the position
        return (
          // returns a Tile object for each tile
          <Tile
            key={index}
            className={tileClass}
            isMine={tile.isMine}
            isRevealed={tile.isRevealed}
            isFlagged={tile.isFlagged}
            adjacentMines={tile.adjacentMines}
            onClick={() => handleTileClick(board, rowIndex, colIndex, setBoard)}
            onRightClick={(event) =>
              handleRightClick(board, rowIndex, colIndex, setBoard, event)
            }
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
  // const directions_for_non_zero_adjacent_tiles = [
  //   [0, -1], // Left middle
  //   [-1, 0], // Middle top
  //   [0, 1], // Right middle
  //   [1, 0], // Middle down
  // ];

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
  // else {
  //   directions_for_non_zero_adjacent_tiles.forEach(([dx, dy]) => {
  //     const newRow = row + dx;
  //     const newCol = col + dy;

  //     if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
  //       const tile = board[newRow][newCol];
  //       if (!tile.isRevealed && !tile.isMine) {
  //         tile.isRevealed = true;
  //       }
  //     }
  //     });
  //   }
  // }
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
function handleRightClick(board, rowIndex, colIndex, setBoard, event) {
  event.preventDefault(); // Prevent the default behavior of a right-click from showing

  const newBoard = [...board];
  const tile = newBoard[rowIndex][colIndex];

  // Toggle the isFlagged state if the tile is not revealed
  if (!tile.isRevealed) {
    if (tile.isFlagged) {
      tile.isFlagged = false;
    } else {
      tile.isFlagged = true;
    }
    setBoard(newBoard);
  }
}
