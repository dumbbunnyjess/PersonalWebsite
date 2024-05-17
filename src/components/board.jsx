import React from "react";
import Tile from "./tile";

function Board({ board, onTileClick, handleRightClick }) {
  return (
    <div className="board">
      {board.flat().map((tile, index) => {
        const colIndex = index % board.length; // assuming board is square
        const rowIndex = Math.floor(index / board.length);
        const tileClass = (rowIndex + colIndex) % 2 === 0 ? "tile1" : "tile2";

        return (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            className={tileClass}
            isMine={tile.isMine}
            isRevealed={tile.isRevealed}
            isFlagged={tile.isFlagged}
            adjacentMines={tile.adjacentMines}
            onClick={() => onTileClick(rowIndex, colIndex)}
            onRightClick={(event) => {
              event.preventDefault();
              handleRightClick(rowIndex, colIndex);
            }}
          />
        );
      })}
    </div>
  );
}

export default Board;
