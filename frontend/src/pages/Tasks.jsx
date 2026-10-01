import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    { title: "Complete DBMS Assignment", completed: false },
    { title: "Study Operating Systems", completed: false },
    { title: "Prepare Project Report", completed: true },
  ]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  return (
    <div className="page-container">
      <h1>✅ Tasks</h1>
      <p>Manage your academic tasks.</p>

      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />

          <span
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
            }}
          >
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tasks;