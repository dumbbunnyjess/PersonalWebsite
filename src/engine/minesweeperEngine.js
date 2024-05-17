/**
 * Creates an initial 8x8 Minesweeper board with 10 randomly placed mines.
 * @returns {Object[][]} A Minesweeper board ready to start the game.
 */
export const createInitialBoard = () => {
  let board = initializeBoard();
  let minesPlaced = false;
  placeMines(board);
  return board;
};

/**
 * Generates an empty 8x8 Minesweeper board.
 * @returns {Object[][]} An 8x8 board array filled with tile objects.
 */
function initializeBoard() {
  return Array(8)
    .fill()
    .map(() =>
      Array(8)
        .fill()
        .map(() => ({
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0,
        }))
    );
}

/**
 * Randomly places mines on the board and updates adjacent mine counts.
 * @param {Object[][]} board The Minesweeper board.
 * @param {number} mineCount The number of mines to place.
 */
function placeMines(board, mineCount = 10) {
  let placedMines = 0;
  while (placedMines < mineCount) {
    let row = Math.floor(Math.random() * 8);
    let col = Math.floor(Math.random() * 8);
    if (!board[row][col].isMine) {
      board[row][col].isMine = true;
      incrementAdjacentMines(board, row, col);
      placedMines++;
    }
  }
}

/**
 * Increments the adjacent mines count for all surrounding cells of a given mine.
 * @param {Object[][]} board The Minesweeper board.
 * @param {number} row The row index of the mine.
 * @param {number} col The column index of the mine.
 */
function incrementAdjacentMines(board, row, col) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (
        row + i >= 0 &&
        row + i < 8 &&
        col + j >= 0 &&
        col + j < 8 &&
        !(i === 0 && j === 0)
      ) {
        board[row + i][col + j].adjacentMines += 1;
      }
    }
  }
}

/**
 * Logs to the console the current state of the Minesweeper board to the console.
 * Each tile's state is represented as 'M' for mines, a number for the count of
 * adjacent mines, 'F' for flagged, '_' for unrevealed, and '□' for revealed tiles
 * with no adjacent mines.
 *
 * @param {Object[][]} board The Minesweeper board to print.
 */
export const printBoard = (board) => {
  let boardString = "";
  for (let row of board) {
    for (let tile of row) {
      if (tile.isMine) {
        boardString += "M ";
      } else if (tile.isRevealed) {
        boardString += tile.adjacentMines > 0 ? `${tile.adjacentMines} ` : "□ ";
      } else if (tile.isFlagged) {
        boardString += "F ";
      } else {
        boardString += "_ ";
      }
    }
    boardString += "\n"; // New line at the end of each row
  }
  console.log(boardString);
};

export const checkWin = (board) => {
  // Logic to determine if the player has won
};

export const checkLoss = (board) => {
  // Logic to determine if the player has lost
};

// ...other game logic functions
