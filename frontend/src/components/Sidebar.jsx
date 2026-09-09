
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");
};
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">S</div>

        <div>
          <h2>StudentHub</h2>
          <span>Student Portal</span>
        </div>
      </div>

      <nav className="navigation">

        <p className="menu-title">MAIN MENU</p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>📊</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>📚</span>
          Courses
        </NavLink>

        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>📝</span>
          Assignments
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>📅</span>
          Attendance
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>✅</span>
          Tasks
        </NavLink>
         
         <NavLink
          to="/study-planner"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>📚</span>
          Study Planner
        </NavLink>

         <p className="menu-title account-title">ACCOUNT</p>


        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>👤</span>
          Profile
        </NavLink>
        <button 
           className="nav-link logout-btn" onClick={handleLogout}>
          <span>🚪</span>
          Logout
        </button>

      </nav>

      <div className="sidebar-bottom">
        <div className="student-mini">
          <div className="avatar">K</div>

          <div>
            <strong>Student</strong>
            <small>Computer Science</small>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;