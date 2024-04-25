import Github from "../images/header/github.png";
import LinkedIn from "../images/header/linkedin.png";

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
      <nav className="navbar">
        <div className="navbar-nav-left">
          <button
            id="LoadWelcome"
            className="navbar-nav-btn"
            onClick={handleWelcomeClick}
          >
            Welcome
          </button>
        </div>
        <h1 className="navbar-nav-middle">Jessica Lin</h1>
        <div className="navbar-nav-right">
          {/* <button className="navbar-nav-btn">My Interests</button> */}
          {/* <button className="navbar-nav-btn">Contact</button> */}
          {/* </div> */}
          {/* <div className="navbar-nav-icon-container">
          <img src={Github} alt="Github" className="navbar-nav-icon" />
          <img src={LinkedIn} alt="LinkedIn" className="navbar-nav-icon" /> */}
          <div className="dropdown">
            <button className="navbar-nav-btn">Personal Projects</button>
            <div className="dropdown-content">
              <button
                id="LoadMinesweeper"
                className="dropbtn"
                onClick={handleMinesweeperClick}
              >
                Minesweeper
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
