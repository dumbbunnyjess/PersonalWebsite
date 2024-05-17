// import React, { useEffect, useState } from "react";
// import CustomHeader from "./header";
// import Board from "./board";
// import Footer from "./footer";
// function Minesweeper() {
//   return (
//     <div>
//       <CustomHeader></CustomHeader>
//       <div className="main-content">
//         <div className="fixed-page-height-container">
//           <div className="app-container">
//             <Board></Board>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Minesweeper;

import React, { useState } from "react";
import CustomHeader from "./header";
import Board from "./board";
import Footer from "./footer";
import { createInitialBoard } from "../engine/minesweeperEngine"; // Ensure this function is properly imported
import ResetButton from "./resetButton"; // Ensure you have this component

// function Minesweeper() {
//   const [board, setBoard] = useState(createInitialBoard());

//   // const resetBoard = () => {
//   //   console.log("resetting..");
//   //   setBoard(createInitialBoard()); // Reset the board state
//   // };
//   const resetBoard = () => {
//     console.log("resetting..");
//     setBoard((prevBoard) => {
//       return createInitialBoard();
//     });
//   };

//   return (
//     <div>
//       <CustomHeader />
//       <div className="main-content">
//         <div className="fixed-page-height-container">
//           <div className="app-container">
//             <Board board={board} setBoard={setBoard} />
//             <ResetButton onReset={resetBoard} />{" "}
//             {/* Reset button outside the Board */}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

function Minesweeper() {
  const [board, setBoard] = useState(createInitialBoard());
  const [key, setKey] = useState(0); // Add a key state

  const resetBoard = () => {
    console.log("resetting..");
    setBoard(createInitialBoard());
    setKey((prevKey) => prevKey + 1); // Increment key to force remount
  };

  return (
    <div>
      <CustomHeader />
      <div className="main-content">
        <div className="fixed-page-height-container">
          <div className="app-container">
            <Board key={key} board={board} setBoard={setBoard} />
            <ResetButton onReset={resetBoard} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Minesweeper;
