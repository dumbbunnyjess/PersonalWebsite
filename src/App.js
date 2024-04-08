// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MinesweeperPage from "./pages/minesweeper.js";
import WelcomePage from "./pages/welcome.js";

function App() {
  return (
    <Router>
      <div>
        {/* Your navigation */}
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/minesweeper">Minesweeper</Link>
          {/* Links to other projects */}
        </nav>

        {/* Your routes */}
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
