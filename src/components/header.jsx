import Github from "../images/header/github.png";
import LinkedIn from "../images/header/linkedin.jpeg";

import { useNavigate } from "react-router-dom";

function CustomHeader() {
  const navigate = useNavigate();

  const handleMinesweeperClick = () => {
    navigate("/minesweeper"); // Navigate to the Minesweeper page
  };

  const handleWelcomeClick = () => {
    navigate("/"); // Navigate to the Welcome page
  };

  return (
    <div>
      <nav class="navbar">
        <div class="navbar-nav-left">
          <button
            id="LoadWelcome"
            class="navbar-nav-btn"
            onClick={handleWelcomeClick}
          >
            Welcome
          </button>
          <div class="dropdown">
            <button class="navbar-nav-btn">Personal Projects</button>
            <div class="dropdown-content">
              <button
                id="LoadMinesweeper"
                class="dropbtn"
                onClick={handleMinesweeperClick}
              >
                Minesweeper
              </button>
              <a href="#">Project 2</a>
              <a href="#">Project 3</a>
            </div>
          </div>
        </div>
        <h1 class="navbar-nav-middle">Jessica Lin</h1>
        <div class="navbar-nav-right">
          <button class="navbar-nav-btn">My Hobbies</button>
          <button class="navbar-nav-btn">Contact</button>
        </div>
        <div class="navbar-nav-icon-container">
          <img src={Github} alt="Github" class="navbar-nav-icon" />
          <img src={LinkedIn} alt="LinkedIn" class="navbar-nav-icon" />
        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
