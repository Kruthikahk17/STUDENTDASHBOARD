import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import Tasks from "./pages/Tasks";
import StudyPlanner from "./pages/StudyPlanner";
import User from "./pages/User";

import LearningResources from "./pages/LearningResources";
import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import AcademicCalendar from "./pages/AcademicCalendar";
import ExamSchedule from "./pages/ExamSchedule";
import ProductivityAnalytics from "./pages/ProductivityAnalytics";
import ProgressReports from "./pages/ProgressReports";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="content">
          <Routes>

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Phase 1 */}
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/assignments"
              element={
                <ProtectedRoute>
                  <Assignments />
                </ProtectedRoute>
              }
            />

            <Route
              path="/attendance"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />

            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />

            <Route
              path="/study-planner"
              element={
                <ProtectedRoute>
                  <StudyPlanner />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />

            {/* Phase 2 */}
            <Route
              path="/learning-resources"
              element={
                <ProtectedRoute>
                  <LearningResources />
                </ProtectedRoute>
              }
            />

            <Route
              path="/notes"
              element={
                <ProtectedRoute>
                  <Notes />
                </ProtectedRoute>
              }
            />

            <Route
              path="/reminders"
              element={
                <ProtectedRoute>
                  <Reminders />
                </ProtectedRoute>
              }
            />

            <Route
              path="/academic-calendar"
              element={
                <ProtectedRoute>
                  <AcademicCalendar />
                </ProtectedRoute>
              }
            />

            <Route
              path="/exam-schedule"
              element={
                <ProtectedRoute>
                  <ExamSchedule />
                </ProtectedRoute>
              }
            />

            <Route
              path="/productivity-analytics"
              element={
                <ProtectedRoute>
                  <ProductivityAnalytics />
                </ProtectedRoute>
              }
            />

            <Route
              path="/progress-reports"
              element={
                <ProtectedRoute>
                  <ProgressReports />
                </ProtectedRoute>
              }
            />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;