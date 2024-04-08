const Tile = ({
  isMine,
  isRevealed,
  isFlagged,
  onClick,
  className,
  adjacentMines,
}) => {
  let tileStateClass = "";
  let content = "";
  if (isRevealed) {
    if (isMine) {
      tileStateClass = "mine";
    } else if (adjacentMines > 0) {
      content = adjacentMines; // Display the number of adjacent mines
      tileStateClass = "number";
    } else {
      // Add additional classes for other states if necessary
      if (className === "tile1") {
        tileStateClass = "revealedtile1";
      } else if (className === "tile2") {
        tileStateClass = "revealedtile2";
      }
    }
  }

  // Combine the classes
  const tileClasses = `tile ${className} ${tileStateClass}`.trim();

  return (
    <div className={tileClasses} onClick={onClick}>
      {/* You can display different content based on the tile's state here */}
      {content}
    </div>
  );
};

export default Tile;
//   return (
//     <div className={`tile ${className}`} onClick={onClick}>
//       {/* Other content */}
//     </div>
//   );
// };

// export default Tile;
