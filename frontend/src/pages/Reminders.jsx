import { useEffect, useState } from "react";

function Reminders() {
  const [reminders, setReminders] = useState([]);

  // Load reminders
  useEffect(() => {
    fetch("http://localhost:5000/api/reminders")
      .then((response) => response.json())
      .then((data) => {
        setReminders(data);
      })
      .catch((error) => {
        console.error("Error fetching reminders:", error);
      });
  }, []);

  // Add reminder
  const addReminder = async () => {
    const title = prompt("Enter reminder:");

    if (!title) return;

    const newReminder = {
      title: title,
      date: "2026-10-01T18:00:00",
      type: "Other",
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/reminders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReminder),
        }
      );

      const savedReminder = await response.json();

      setReminders([...reminders, savedReminder]);
    } catch (error) {
      console.error("Error adding reminder:", error);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>🔔 Reminders</h1>
          <p>Keep track of important academic deadlines.</p>
        </div>

        <button onClick={addReminder}>
          + Add Reminder
        </button>
      </div>

      <div className="reminders-list">
        {reminders.map((reminder) => (
          <div
            className="resource-card"
            key={reminder._id}
          >
            <h3>{reminder.title}</h3>

            <p>
              📅{" "}
              {new Date(reminder.date).toLocaleDateString()}
            </p>

            <p>
              ⏰{" "}
              {new Date(reminder.date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <p>📌 Type: {reminder.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reminders;