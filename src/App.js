import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./components/header.jsx";
import Welcome from "./components/welcome.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Minesweeper from "./components/minesweeper.jsx";

function App() {
  return (
    <div>
      <Minesweeper />
    </div>
  );
}

export default App;
