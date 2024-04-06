function CustomHeader() {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-nav-left">
          <button id="LoadWelcome" class="navbar-nav-btn">
            Welcome
          </button>
          <div class="dropdown">
            <button class="navbar-nav-btn">Personal Projects</button>
            <div class="dropdown-content">
              <button id="LoadMinesweeper" class="dropbtn">
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
          <img src="/images/github.png" alt="Github" class="navbar-nav-icon" />
          <img src="/images/email.png" alt="Email" class="navbar-nav-icon" />
        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
