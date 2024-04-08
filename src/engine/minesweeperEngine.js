export const createInitialBoard = () => {
  // Create an empty board
  let board = Array(8)
    .fill()
    .map(() =>
      Array(8)
        .fill(null)
        .map(() => ({
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0,
        }))
    );

  // Randomly place mines
  for (let mines = 0; mines <= 9; ++mines) {
    let row = Math.floor(Math.random() * 8);
    let col = Math.floor(Math.random() * 8);
    if (!board[row][col].isMine) {
      board[row][col].isMine = true;

      //   Increment adjacentMines count for surrounding cells
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
  }

  return board;
};

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
