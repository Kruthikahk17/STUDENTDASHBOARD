import React, { useState } from "react";

function StudyPlanner() {
  const [sessions, setSessions] = useState([
    {
      subject: "Mathematics",
      time: "08:00 - 09:00",
      topic: "Revision",
    },
    {
      subject: "Computer Science",
      time: "10:00 - 11:00",
      topic: "Chapter 4",
    },
  ]);

  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [topic, setTopic] = useState("");

  const addSession = () => {
    if (!subject || !time || !topic) {
      alert("Please fill all fields");
      return;
    }

    setSessions([
      ...sessions,
      {
        subject,
        time,
        topic,
      },
    ]);

    setSubject("");
    setTime("");
    setTopic("");
  };

  return (
    <div className="page-container">
      <h1>📚 Study Planner</h1>

      <div className="planner-form">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button onClick={addSession}>
          + Add Study Session
        </button>
      </div>

      <div className="study-list">
        {sessions.map((session, index) => (
          <div className="study-card" key={index}>
            <h3>{session.subject}</h3>
            <p>⏰ {session.time}</p>
            <p>📖 {session.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyPlanner;