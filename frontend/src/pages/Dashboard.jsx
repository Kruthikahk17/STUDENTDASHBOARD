import API from "../services/api";
import { useState, useEffect } from "react";
import StatCard from "../components/StatCard";
import Topbar from "../components/Topbar";

function Dashboard() {

  const [darkMode, setDarkMode] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
  API.get("/courses")
    .then((response) => {
      setCourses(response.data);
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
}, []);

  const deadlines = [
    {
      title: "Assignment 1 - Web Development",
      subject: "Web Development",
      date: "20 Sep",
    },
    {
      title: "Project Report",
      subject: "Database Management Systems",
      date: "25 Sep",
    },
    {
      title: "Quiz - Operating Systems",
      subject: "Operating Systems",
      date: "28 Sep",
    },
  ];

  const assignments = [
    {
      title: "Web Development Assignment",
      date: "15 Sep 2026",
      status: "Completed",
    },
    {
      title: "DBMS Project Report",
      date: "25 Sep 2026",
      status: "Pending",
    },
    {
      title: "Operating Systems Quiz",
      date: "28 Sep 2026",
      status: "Pending",
    },
  ];

  const schedule = [
    ["08:00 - 09:00", "Mathematics", "Online Study"],
    ["10:00 - 11:00", "Computer Science", "Chapter 4 - OOP"],
    ["02:00 - 03:00", "Database Management", "Assignments"],
    ["04:00 - 05:00", "Operating Systems", "Revision"],
  ];

  return (
    <div className="dashboard">

      <Topbar
         darkMode={darkMode}
         setDarkMode={setDarkMode}
     />  

      {/* Welcome */}
      <section className="welcome-section">

        <div>
          <h2 className="welcome-title">
            Good Morning, Kruthika! 👋
          </h2>

          <p className="welcome-text">
            Here's your academic overview for today.
          </p>
        </div>

        <div className="date-box">
          <strong>📅 30 September 2026</strong>

          <p>
            Keep going, you're doing great!
          </p>
        </div>

      </section>

      {/* Statistics */}
      <section className="stats-grid">

        <StatCard
          title="Total Courses"
          value={courses.length}
          description="Active courses"
          icon="🎓"
          bg="stat-blue"
        />

        <StatCard
          title="Assignments"
          value="03"
          description="Pending"
          icon="📄"
          bg="stat-pink"
        />

        <StatCard
          title="Tasks"
          value="05"
          description="In progress"
          icon="✓"
          bg="stat-green"
        />

        <StatCard
          title="Attendance"
          value="92%"
          description="Overall attendance"
          icon="📅"
          bg="stat-purple"
        />

      </section>

      {/* Deadlines + Assignments */}
      <section className="dashboard-grid">

        <div className="dashboard-card">

          <div className="card-header">

            <h3 className="card-title">
              📅 Upcoming Deadlines
            </h3>

            <button className="view-all">
              View All →
            </button>

          </div>

          <div className="deadline-list">

            {deadlines.map((item) => (
              <div
                className="deadline-item"
                key={item.title}
              >

                <div>
                  <p className="deadline-title">
                    {item.title}
                  </p>

                  <p className="deadline-subject">
                    {item.subject}
                  </p>
                </div>

                <span className="deadline-date">
                  {item.date}
                </span>

              </div>
            ))}

          </div>

        </div>

        <div className="dashboard-card">

          <div className="card-header">

            <h3 className="card-title">
              📄 Recent Assignments
            </h3>

            <button className="view-all">
              View All →
            </button>

          </div>

          <div className="assignment-list">

            {assignments.map((item) => (
              <div
                className="assignment-item"
                key={item.title}
              >

                <div>
                  <p className="assignment-title">
                    {item.title}
                  </p>

                  <p className="assignment-date">
                    {item.date}
                  </p>
                </div>

                <span
                  className={`status ${
                    item.status === "Completed"
                      ? "completed"
                      : "pending"
                  }`}
                >
                  {item.status}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Schedule + Progress */}
      <section className="dashboard-grid">

        <div className="dashboard-card">

          <div className="card-header">

            <h3 className="card-title">
              🕒 Study Schedule
            </h3>

            <button className="view-all">
              View All →
            </button>

          </div>

          <div className="schedule-list">

            {schedule.map((item) => (
              <div
                className="schedule-item"
                key={item[0]}
              >

                <span className="schedule-time">
                  {item[0]}
                </span>

                <div>
                  <p className="schedule-subject">
                    {item[1]}
                  </p>

                  <p className="schedule-description">
                    {item[2]}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="dashboard-card">

          <div className="card-header">

            <h3 className="card-title">
              📊 Academic Progress
            </h3>

          </div>

          <div className="progress-layout">

            <div className="progress-circle">

              <div className="progress-circle-inner">

                <span className="progress-number">
                  82%
                </span>

                <span className="progress-label">
                  Overall
                </span>

              </div>

            </div>

            <div className="progress-bars">

              <Progress
                subject="Mathematics"
                value="90%"
              />

              <Progress
                subject="Computer Science"
                value="80%"
              />

              <Progress
                subject="DBMS"
                value="85%"
              />

              <Progress
                subject="Operating Systems"
                value="78%"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

function Progress({ subject, value }) {
  return (
    <div className="progress-row">

      <div className="progress-header">
        <span>{subject}</span>
        <span>{value}</span>
      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width: value }}
        />

      </div>

    </div>
  );
}

export default Dashboard;