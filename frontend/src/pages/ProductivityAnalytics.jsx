import React, { useEffect, useState } from "react";
import "./ProductivityAnalytics.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function ProductivityAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics/productivity")
      .then((response) => response.json())
      .then((data) => {
        setAnalytics(data);
      })
      .catch((error) => {
        console.error("Error fetching analytics:", error);
      });
  }, []);

  // Weekly study hours
  const studyHoursData = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "Study Hours",
        data: [2, 4, 3, 5, 4, 6, 3],
        borderRadius: 8,
      },
    ],
  };

  // Productivity trend
  const productivityData = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "Productivity %",
        data: [65, 72, 68, 80, 76, 92, 84],
        tension: 0.4,
      },
    ],
  };

  // Subject progress
  const subjectProgressData = {
    labels: [
      "Mathematics",
      "Computer Science",
      "DBMS",
      "Operating Systems",
    ],
    datasets: [
      {
        label: "Progress %",
        data: [90, 80, 85, 78],
        borderRadius: 8,
      },
    ],
  };

  // Task completion
  const completedTasks = analytics
    ? analytics.summary.completedTasks
    : 0;

  const taskData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedTasks, 0],
      },
    ],
  };

  return (
    <div className="page-container">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>📊 Productivity Analytics</h1>
          <p>
            Monitor your study activity, productivity and academic progress.
          </p>
        </div>

        <select className="period-select">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Semester</option>
        </select>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">

        <div className="stat-card blue">
          <div className="stat-icon">⏱️</div>

          <div>
            <p>Study Time</p>
            <h2>
              {analytics
                ? analytics.summary.totalStudyHours
                : 0} hrs
            </h2>

            <span>+12% from last week</span>
          </div>
        </div>

        <div className="stat-card green">
          <div className="stat-icon">✅</div>

          <div>
            <p>Tasks Completed</p>

            <h2>
              {analytics
                ? analytics.summary.completedTasks
                : 0}
            </h2>

            <span>8 tasks remaining</span>
          </div>
        </div>

        <div className="stat-card purple">
          <div className="stat-icon">📈</div>

          <div>
            <p>Completion Rate</p>

            <h2>
              {analytics
                ? `${analytics.summary.completedAssignments} completed`
                : "0 completed"}
            </h2>

            <span>Great progress!</span>
          </div>
        </div>

        <div className="stat-card orange">
          <div className="stat-icon">🔥</div>

          <div>
            <p>Productivity Score</p>

            <h2>
              {analytics
                ? analytics.summary.completedTasks
                : 0}
            </h2>

            <span>Excellent performance</span>
          </div>
        </div>

      </div>

      {/* Charts Row */}
      <div className="analytics-grid">

        {/* Study Hours */}
        <div className="chart-card">

          <div className="chart-header">
            <div>
              <h2>Weekly Study Hours</h2>

              <p>
                Your study activity during the week
              </p>
            </div>
          </div>

          <div className="chart-box">
            <Bar
              data={studyHoursData}
              options={{
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                  legend: {
                    display: false,
                  },
                },

                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>

        </div>

        {/* Task Completion */}
        <div className="chart-card small-chart">

          <div className="chart-header">
            <div>
              <h2>Task Performance</h2>

              <p>
                Completed vs pending
              </p>
            </div>
          </div>

          <div className="doughnut-box">
            <Doughnut
              data={taskData}
              options={{
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
              }}
            />
          </div>

        </div>

      </div>

      {/* Productivity Trend */}
      <div className="chart-card full-chart">

        <div className="chart-header">

          <div>
            <h2>Productivity Trend</h2>

            <p>
              Daily productivity percentage
            </p>
          </div>

          <span className="performance-badge">
            {analytics
              ? `${analytics.summary.completedTasks} Tasks`
              : "0 Tasks"}
          </span>

        </div>

        <div className="line-chart-box">

          <Line
            data={productivityData}
            options={{
              responsive: true,
              maintainAspectRatio: false,

              plugins: {
                legend: {
                  display: false,
                },
              },

              scales: {
                y: {
                  min: 0,
                  max: 100,
                },
              },
            }}
          />

        </div>

      </div>

      {/* Academic Progress */}
      <div className="bottom-grid">

        {/* Subject Progress */}
        <div className="chart-card">

          <div className="chart-header">

            <div>
              <h2>Academic Progress</h2>

              <p>
                Subject-wise performance
              </p>
            </div>

          </div>

          <div className="subject-chart">

            <Bar
              data={subjectProgressData}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                  legend: {
                    display: false,
                  },
                },

                scales: {
                  x: {
                    min: 0,
                    max: 100,
                  },
                },
              }}
            />

          </div>

        </div>

        {/* Productivity Summary */}
        <div className="chart-card summary-card">

          <h2>🎯 Productivity Summary</h2>

          <div className="summary-item">
            <span>Study consistency</span>

            <strong>92%</strong>
          </div>

          <div className="progress-bar">
            <div style={{ width: "92%" }}></div>
          </div>

          <div className="summary-item">
            <span>Task completion</span>

            <strong>86%</strong>
          </div>

          <div className="progress-bar">
            <div style={{ width: "86%" }}></div>
          </div>

          <div className="summary-item">
            <span>Academic progress</span>

            <strong>
              {analytics
                ? `${analytics.summary.completedAssignments} completed`
                : "0 completed"}
            </strong>
          </div>

          <div className="progress-bar">
            <div style={{ width: "82%" }}></div>
          </div>

          <div className="achievement-box">
            🏆 You're making great progress!

            <small>
              Keep your study consistency high to achieve your goals.
            </small>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductivityAnalytics;