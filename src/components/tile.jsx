/**
 * Determines the CSS class for the tile based on its state.
 * @param {boolean} isMine Indicates if the tile is a mine.
 * @param {boolean} isRevealed Indicates if the tile has been revealed.
 * @param {boolean} isFlagged Indicates if the tile is flagged.
 * @param {number} adjacentMines Number of mines adjacent to this tile.
 * @param {string} className Base styling class passed from parent.
 * @returns {string} The appropriate CSS class for the tile state.
 */
function determineTileStateClass(isMine, isRevealed, adjacentMines, className) {
  if (!isRevealed) {
    return "";
  }
  if (isMine) {
    return "mine";
  } else if (adjacentMines > 0) {
    return "number";
  } else {
    return className.includes("tile1") ? "revealedtile1" : "revealedtile2";
  }
}

/**
 * Gets the content to be displayed on a tile based on the number of adjacent mines.
 * @param {boolean} isRevealed Indicates if the tile has been revealed.
 * @param {number} adjacentMines Number of mines adjacent to this tile.
 * @returns {string} The content to display on the tile.
 */
function getContent(isRevealed, adjacentMines) {
  return isRevealed && adjacentMines > 0 ? adjacentMines.toString() : "";
}

/**
 * Represents a single tile in the Minesweeper game.
 * This component displays the tile state based on its properties,
 * such as whether it's a mine, revealed, flagged, or the number of adjacent mines.
 *
 * @param {boolean} isMine - Indicates if the tile is a mine.
 * @param {boolean} isRevealed - Indicates if the tile has been revealed.
 * @param {boolean} isFlagged - Indicates if the tile is flagged.
 * @param {function} onClick - Function to handle click events on the tile.
 * @param {string} className - Additional CSS classes for styling the tile.
 * @param {number} adjacentMines - Number of mines adjacent to this tile.
 * @returns {JSX.Element} A JSX element representing the tile with appropriate styling and behavior.
 */
const Tile = ({
  isMine,
  isRevealed,
  isFlagged,
  onClick,
  className,
  adjacentMines,
}) => {
  const tileStateClass = determineTileStateClass(
    isMine,
    isRevealed,
    adjacentMines,
    className
  );
  const content = getContent(isRevealed, adjacentMines);

  // Construct the CSS class string for the tile element
  const tileClasses = `tile ${className} ${tileStateClass}`.trim();

  // Render the tile with an onClick handler and display the appropriate content
  return (
    <div className={tileClasses} onClick={onClick}>
      {content}
    </div>
  );
};

export default Tile;
