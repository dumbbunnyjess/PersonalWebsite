// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MinesweeperPage from "./pages/minesweeper.js";
import WelcomePage from "./pages/welcome.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/minesweeper" element={<MinesweeperPage />} />
          {/* Add additional routes here if you have more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
