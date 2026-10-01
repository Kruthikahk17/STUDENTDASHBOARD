import React, { useEffect, useState } from "react";
import "./AcademicCalendar.css";

function AcademicCalendar() {
  const [month, setMonth] = useState(6);
  const [year, setYear] = useState(2026);
  const [events, setEvents] = useState({});

  useEffect(() => {
  fetch("http://localhost:5000/api/calendar")
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    })
    .catch((error) => {
      console.error("Error fetching calendar events:", error);
    });
}, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const getEvent = (day) => {
    const dateKey = `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;

    return events[dateKey];
  };

  return (
    <div className="academic-calendar-page">

      <div className="calendar-header">
        <div>
          <h1>📅 Academic Calendar</h1>
          <p>
            Manage your exams, assignments and academic events.
          </p>
        </div>

        <button className="today-button">
          Today
        </button>
      </div>

      <div className="calendar-container">

        <div className="calendar-top">
          <button onClick={previousMonth}>‹</button>

          <h2>
            {monthNames[month]} {year}
          </h2>

          <button onClick={nextMonth}>›</button>
        </div>

        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-days">

          {Array.from({ length: firstDay }).map(
            (_, index) => (
              <div
                className="calendar-day empty"
                key={`empty-${index}`}
              ></div>
            )
          )}

          {Array.from(
            { length: daysInMonth },
            (_, index) => index + 1
          ).map((day) => {

            const event = getEvent(day);

            return (
              <div
                className="calendar-day"
                key={day}
              >
                <span className="day-number">
                  {day}
                </span>

                {event && (
                  <div
                    className={`calendar-event ${event.type.toLowerCase()}`}
                  >
                    <strong>{event.title}</strong>
                    <small>{event.type}</small>
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>

      <div className="calendar-legend">
        <h3>Event Types</h3>

        <div className="legend-items">
          <div>🟠 Deadline</div>
          <div>🔵 Exam</div>
          <div>🟣 Project</div>
        </div>
      </div>

    </div>
  );
}

export default AcademicCalendar;