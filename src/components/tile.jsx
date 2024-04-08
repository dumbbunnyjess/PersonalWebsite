const Tile = ({ className, onClick }) => {
  return (
    <div className={`tile ${className}`} onClick={onClick}>
      {/* Other content */}
    </div>
  );
};

export default Tile;
