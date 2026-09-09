import { useEffect, useState } from "react";

function StudyPlanner() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/study-sessions")
    .then((res) => res.json())
    .then((data) => {
      setSessions(data);
    })
    .catch((error) => {
      console.error("Error fetching study sessions:", error);
    });
}, []);


  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    subject: "",
    topic: "",
    date: "",
    startTime: "",
    endTime: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addSession = (e) => {
    e.preventDefault();

    if (
      !form.subject ||
      !form.topic ||
      !form.date ||
      !form.startTime ||
      !form.endTime
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newSession = {
      id: Date.now(),
      ...form,
      completed: false,
    };

    setSessions([...sessions, newSession]);

    setForm({
      subject: "",
      topic: "",
      date: "",
      startTime: "",
      endTime: "",
      priority: "Medium",
    });

    setShowForm(false);
  };

  const deleteSession = (id) => {
    setSessions(
      sessions.filter((session) => session.id !== id)
    );
  };

  const toggleCompleted = (id) => {
    setSessions(
      sessions.map((session) =>
        session.id === id
          ? {
              ...session,
              completed: !session.completed,
            }
          : session
      )
    );
  };

  return (
    <div className="study-planner">

      {/* Header */}
      <div className="page-header">

        <div>
          <h1>Study Planner</h1>
          <p>
            Organize your study sessions and stay on track.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Study Session
        </button>

      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <span>Total Sessions</span>
          <strong>{sessions.length}</strong>
        </div>

        <div className="stat-card">
          <span>Completed</span>
          <strong>
            {sessions.filter((s) => s.completed).length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <strong>
            {sessions.filter((s) => !s.completed).length}
          </strong>
        </div>

      </div>

      {/* Add Session Form */}
      {showForm && (
        <div className="planner-form-card">

          <h2>Add Study Session</h2>

          <form onSubmit={addSession}>

            <div className="form-grid">

              <div className="form-group">
                <label>Subject *</label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Web Development"
                />
              </div>

              <div className="form-group">
                <label>Topic *</label>

                <input
                  type="text"
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  placeholder="e.g. React Hooks"
                />
              </div>

              <div className="form-group">
                <label>Date *</label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Priority</label>

                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="form-group">
                <label>Start Time *</label>

                <input
                  type="time"
                  name="startTime"
                  value={form.startTime}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>End Time *</label>

                <input
                  type="time"
                  name="endTime"
                  value={form.endTime}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-actions">

              <button
                type="submit"
                className="primary-btn"
              >
                Save Session
              </button>

              <button
                type="button"
                className="secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      {/* Sessions */}
      <div className="sessions-section">

        <div className="section-heading">
          <h2>My Study Sessions</h2>
          <span>{sessions.length} sessions</span>
        </div>

        {sessions.length === 0 ? (
          <div className="empty-state">
            <h3>No study sessions</h3>
            <p>
              Create your first study session to get started.
            </p>
          </div>
        ) : (
          <div className="session-list">

            {sessions.map((session) => (

              <div
                className={`session-card ${
                  session.completed ? "completed" : ""
                }`}
                key={session.id}
              >

                <div className="session-date">
                  <strong>
                    {new Date(
                      session.date + "T00:00:00"
                    ).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </strong>

                  <span>
                    {new Date(
                      session.date + "T00:00:00"
                    ).getDate()}
                  </span>

                  <small>
                    {new Date(
                      session.date + "T00:00:00"
                    ).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </small>
                </div>

                <div className="session-info">

                  <div className="session-top">

                    <div>
                      <h3>{session.subject}</h3>
                      <p>{session.topic}</p>
                    </div>

                    <span
                      className={`priority ${session.priority.toLowerCase()}`}
                    >
                      {session.priority}
                    </span>

                  </div>

                  <div className="session-time">
                    🕐 {session.startTime} - {session.endTime}
                  </div>

                  <div className="session-actions">

                    <button
                      onClick={() =>
                        toggleCompleted(session.id)
                      }
                    >
                      {session.completed
                        ? "↩ Mark Pending"
                        : "✓ Complete"}
                    </button>

                    <button
                      onClick={() =>
                        deleteSession(session.id)
                      }
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default StudyPlanner;