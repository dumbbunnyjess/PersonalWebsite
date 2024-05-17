import React from "react";

function ResetButton({ onReset }) {
  return (
    <button className="resetGameButton" onClick={onReset}>
      Reset Game
    </button>
  );
}

export default ResetButton;
