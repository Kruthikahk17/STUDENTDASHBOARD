import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="navbar">

      <div className="navbar-title-area">
        <p className="small-heading">
          STUDENT PORTAL
        </p>

        <h1>
          My Dashboard
        </h1>
      </div>

      <div className="navbar-right">

        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="notification">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="profile">

          <div className="avatar">
            K
          </div>

          <div className="profile-info">
            <strong>Kruthika</strong>
            <small>Student</small>
          </div>

          <span>⌄</span>

        </div>

      </div>

    </header>
  );
}

export default Navbar;