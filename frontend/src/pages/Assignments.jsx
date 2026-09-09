function Assignments() {
  const assignments = [
    {
      title: "Web Development Project",
      subject: "Web Technology",
      deadline: "15 Aug 2026",
      status: "Pending",
    },
    {
      title: "Database Design",
      subject: "DBMS",
      deadline: "18 Aug 2026",
      status: "Pending",
    },
    {
      title: "Network Security Report",
      subject: "Computer Networks",
      deadline: "20 Aug 2026",
      status: "Completed",
    },
    {
      title: "ML Research Paper",
      subject: "Machine Learning",
      deadline: "25 Aug 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="page">

      <div className="page-heading">
        <div>
          <p className="section-label">ACADEMICS</p>
          <h2>Assignments</h2>
          <p>Manage your assignments and deadlines.</p>
        </div>

        <button className="primary-button">
          + New Assignment
        </button>
      </div>

      <div className="card">

        {assignments.map((assignment, index) => (
          <div className="assignment-item" key={index}>

            <div className="assignment-icon">
              📝
            </div>

            <div className="assignment-content">
              <strong>{assignment.title}</strong>

              <span>
                {assignment.subject} • Due {assignment.deadline}
              </span>
            </div>

            <span
              className={
                assignment.status === "Completed"
                  ? "status completed"
                  : "status pending"
              }
            >
              {assignment.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Assignments;