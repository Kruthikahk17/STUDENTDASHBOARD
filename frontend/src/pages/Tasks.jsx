function Tasks() {
  return (
    <div className="page">

      <div className="page-heading">
        <div>
          <p className="section-label">PRODUCTIVITY</p>
          <h2>My Tasks</h2>
          <p>Organize and track your academic tasks.</p>
        </div>

        <button className="primary-button">
          + Add Task
        </button>
      </div>

      <div className="task-card">

        <div className="task-left">
          <input type="checkbox" />
          <div>
            <strong>Complete React project</strong>
            <span>Due today</span>
          </div>
        </div>

        <span className="priority high">
          High
        </span>

      </div>

      <div className="task-card">

        <div className="task-left">
          <input type="checkbox" />
          <div>
            <strong>Prepare DBMS presentation</strong>
            <span>Due tomorrow</span>
          </div>
        </div>

        <span className="priority medium">
          Medium
        </span>

      </div>

      <div className="task-card completed-task">

        <div className="task-left">
          <input type="checkbox" checked readOnly />

          <div>
            <strong>Submit network assignment</strong>
            <span>Completed</span>
          </div>
        </div>

        <span className="priority low">
          Done
        </span>

      </div>

    </div>
  );
}

export default Tasks;