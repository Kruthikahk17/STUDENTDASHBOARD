import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: "🏠", path: "/" },
  { name: "Courses", icon: "📚", path: "/courses" },
  { name: "Assignments", icon: "📄", path: "/assignments" },
  { name: "Attendance", icon: "📅", path: "/attendance" },
  { name: "Tasks", icon: "✅", path: "/tasks" },
  { name: "Study Planner", icon: "⏰", path: "/study-planner" },
  { name: "Learning Resources", icon: "📁", path: "/learning-resources" },
  { name: "Notes", icon: "📝", path: "/notes" },
  { name: "Reminders", icon: "🔔", path: "/reminders" },
  { name: "Academic Calendar", icon: "📆", path: "/academic-calendar" },
  { name: "Exam Schedule", icon: "🎓", path: "/exam-schedule" },
  { name: "Productivity Analytics", icon: "📊", path: "/productivity-analytics" },
  { name: "Progress Reports", icon: "📈", path: "/progress-reports" },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">🎓</div>

        <div>
          <h1 className="logo-title">StudentHub</h1>
          <p className="logo-subtitle">Student Portal</p>
        </div>
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </Link>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <Link
          to="/profile"
          className="sidebar-link"
        >
          <span className="sidebar-icon">⚙️</span>
          <span>Profile</span>
        </Link>

        <button
          className="sidebar-link"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          <span className="sidebar-icon">🚪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;