import React, { useEffect, useState } from "react";

function ProgressReports() {
  const [assignments, setAssignments] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/assignments")
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });

    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === "Completed"
  ).length;

  const totalAssignments = assignments.length;

  const assignmentProgress =
    totalAssignments > 0
      ? Math.round(
          (completedAssignments / totalAssignments) * 100
        )
      : 0;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const totalTasks = tasks.length;

  const taskProgress =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

  const reports = [
    {
      name: "Assignments Completed",
      value: assignmentProgress,
    },
    {
      name: "Study Progress",
      value: taskProgress,
    },
    {
      name: "Exam Preparation",
      value: 0,
    },
    {
      name: "Overall Performance",
      value: Math.round(
        (assignmentProgress + taskProgress) / 2
      ),
    },
  ];

  return (
    <div className="page-container">
      <h1>📈 Progress Reports</h1>

      <p>
        Track your academic progress and performance.
      </p>

      <div className="report-list">
        {reports.map((report) => (
          <div className="report-card" key={report.name}>
            <div className="report-header">
              <span>{report.name}</span>
              <strong>{report.value}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${report.value}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressReports;