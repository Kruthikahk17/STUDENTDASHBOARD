import "../Dashboard.css";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="dashboard">

      <section className="welcome-section">

        <div>
          <p className="greeting">Good morning 👋</p>

          <h2>Welcome back, Kruthika!</h2>

          <p className="welcome-text">
            Here's what's happening with your studies today.
          </p>
        </div>

        <button className="primary-button">
          + Add Task
        </button>

      </section>

      <section className="stats-grid">

        <StatCard
          icon="📚"
          title="Total Courses"
          value="06"
          description="Active courses"
        />

        <StatCard
          icon="📝"
          title="Assignments"
          value="08"
          description="3 pending"
        />

        <StatCard
          icon="📅"
          title="Attendance"
          value="92%"
          description="Overall attendance"
        />

        <StatCard
          icon="✅"
          title="Tasks"
          value="12"
          description="5 completed"
        />

      </section>

      <section className="dashboard-grid">

        <div className="card">

          <div className="card-header">
            <div>
              <p className="section-label">ACADEMICS</p>
              <h3>Recent Assignments</h3>
            </div>

            <button className="view-button">
              View all →
            </button>
          </div>

          <div className="assignment-list">

            <div className="assignment-item">
              <div className="assignment-icon">💻</div>

              <div className="assignment-content">
                <strong>Web Development Project</strong>
                <span>Web Technology</span>
              </div>

              <span className="status pending">
                Pending
              </span>
            </div>

            <div className="assignment-item">
              <div className="assignment-icon">🗄️</div>

              <div className="assignment-content">
                <strong>Database Management</strong>
                <span>DBMS</span>
              </div>

              <span className="status completed">
                Completed
              </span>
            </div>

            <div className="assignment-item">
              <div className="assignment-icon">🤖</div>

              <div className="assignment-content">
                <strong>Machine Learning Report</strong>
                <span>Artificial Intelligence</span>
              </div>

              <span className="status pending">
                Pending
              </span>
            </div>

          </div>

        </div>

        <div className="card">

          <div className="card-header">
            <div>
              <p className="section-label">PROGRESS</p>
              <h3>Course Progress</h3>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-title">
              <span>Web Development</span>
              <strong>85%</strong>
            </div>

            <div className="progress-bar">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-title">
              <span>Database Management</span>
              <strong>72%</strong>
            </div>

            <div className="progress-bar">
              <div style={{ width: "72%" }}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-title">
              <span>Computer Networks</span>
              <strong>64%</strong>
            </div>

            <div className="progress-bar">
              <div style={{ width: "64%" }}></div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;