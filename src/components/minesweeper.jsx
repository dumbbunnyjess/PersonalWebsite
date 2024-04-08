import React, { useEffect, useState } from "react";
import CustomHeader from "./header";
import Board from "./board";
import Footer from "./footer";
function Minesweeper() {
  return (
    <div>
      <CustomHeader></CustomHeader>
      <div className="main-content">
        <div className="app-container">
          <Board></Board>
        </div>
        {/* Your Minesweeper component JSX */}
      </div>
      <Footer />
    </div>
  );
}

export default Minesweeper;
