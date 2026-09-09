function Navbar() {
  return (
    <header className="navbar">

      <div>
        <p className="small-heading">STUDENT PORTAL</p>
        <h1>My Dashboard</h1>
      </div>

      <div className="navbar-right">

        <button className="notification">
          🔔
          <span></span>
        </button>

        <div className="profile">
          <div className="avatar">K</div>

          <div>
            <strong>Student</strong>
            <small>Student</small>
          </div>

          <span>⌄</span>
        </div>

      </div>

    </header>
  );
}

export default Navbar;