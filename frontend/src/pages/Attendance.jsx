function Attendance() {
  return (
    <div className="page">

      <div className="page-heading">
        <div>
          <p className="section-label">ACADEMICS</p>
          <h2>Attendance</h2>
          <p>Track your attendance for all courses.</p>
        </div>
      </div>

      <div className="attendance-summary">

        <div className="attendance-circle">
          <strong>92%</strong>
          <span>Overall</span>
        </div>

        <div>
          <h3>Excellent attendance!</h3>
          <p>
            Your attendance is above the required minimum.
          </p>
        </div>

      </div>

      <div className="card">

        <div className="attendance-row">
          <span>Web Development</span>
          <strong>95%</strong>
        </div>

        <div className="attendance-row">
          <span>Database Management</span>
          <strong>90%</strong>
        </div>

        <div className="attendance-row">
          <span>Computer Networks</span>
          <strong>88%</strong>
        </div>

        <div className="attendance-row">
          <span>Machine Learning</span>
          <strong>94%</strong>
        </div>

      </div>

    </div>
  );
}

export default Attendance;