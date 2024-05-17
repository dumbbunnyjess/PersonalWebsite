import React from "react";
import MinesweeperFlag from "../images/minesweeper/minesweeper_flag.png";

/**
 * Determines the CSS class for the tile based on its state.
 */
function determineTileStateClass(
  isMine,
  isFlagged,
  isRevealed,
  adjacentMines,
  className
) {
  if (!isRevealed) {
    return "";
  }
  if (isMine) {
    return "mine";
  } else if (adjacentMines > 0) {
    return className.includes("tile1") ? "revealedtile1" : "revealedtile2";
  } else {
    return className.includes("tile1") ? "revealedtile1" : "revealedtile2";
  }
}

/**
 * Gets the content to be displayed on a tile based on the number of adjacent mines.
 */
function getContent(isRevealed, adjacentMines, isFlagged) {
  if (isFlagged) {
    return <img src={MinesweeperFlag} alt="Flag" style={{ width: "100%" }} />;
  } else if (isRevealed && adjacentMines > 0) {
    return adjacentMines.toString();
  } else {
    return "";
  }
}

/**
 * Represents a single tile in the Minesweeper game.
 */
const Tile = ({
  isMine,
  isRevealed,
  isFlagged,
  onClick,
  onRightClick,
  className,
  adjacentMines,
}) => {
  const tileStateClass = determineTileStateClass(
    isMine,
    isFlagged,
    isRevealed,
    adjacentMines,
    className
  );
  const content = getContent(isRevealed, adjacentMines, isFlagged); // Now passing isFlagged correctly

  const tileClasses = `tile ${className} ${tileStateClass}`.trim();

  return (
    <div className={tileClasses} onClick={onClick} onContextMenu={onRightClick}>
      {content}
    </div>
  );
};

export default Tile;
