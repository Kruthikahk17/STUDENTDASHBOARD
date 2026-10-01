import { useEffect, useState } from "react";

function ExamSchedule() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch("https://student-dashboard-backend-x92c.onrender.com/api/exams")
      .then((response) => response.json())
      .then((data) => {
        setExams(data);
      })
      .catch((error) => {
        console.error("Error fetching exams:", error);
      });
  }, []);

  const addExam = async () => {
    const subject = prompt("Enter subject:");

    if (!subject) return;

    const newExam = {
      subject: subject,
      examDate: "2026-10-20",
      startTime: "10:00 AM",
      room: "Room 101",
      syllabus: "Full syllabus",
      status: "Upcoming",
    };

    try {
      const response = await fetch(
        "https://student-dashboard-backend-x92c.onrender.com/api/exams",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newExam),
        }
      );

      const savedExam = await response.json();

      setExams([...exams, savedExam]);
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  const deleteExam = async (id) => {
    try {
      await fetch(
        `https://student-dashboard-backend-x92c.onrender.com/api/exams/${id}`,
        {
          method: "DELETE",
        }
      );

      setExams(
        exams.filter((exam) => exam._id !== id)
      );
    } catch (error) {
      console.error("Error deleting exam:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            📖 Exam Schedule
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your upcoming examinations.
          </p>
        </div>

        <button
          onClick={addExam}
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Add Exam
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <div
            key={exam._id}
            className="rounded-xl bg-white p-5 shadow-md"
          >
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              {exam.subject}
            </h2>

            <p className="mb-2 text-gray-600">
              📅{" "}
              <span className="font-medium">
                {new Date(exam.examDate).toLocaleDateString()}
              </span>
            </p>

            <p className="mb-2 text-gray-600">
              ⏰{" "}
              <span className="font-medium">
                {exam.startTime}
              </span>
            </p>

            <p className="mb-2 text-gray-600">
              🏫{" "}
              <span className="font-medium">
                {exam.room}
              </span>
            </p>

            <p className="mb-4 text-gray-600">
              📌{" "}
              <span className="font-medium">
                {exam.status}
              </span>
            </p>

            <button
              onClick={() => deleteExam(exam._id)}
              className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {exams.length === 0 && (
        <div className="mt-6 rounded-xl bg-white p-8 text-center shadow">
          <p className="text-gray-500">
            No exams scheduled.
          </p>
        </div>
      )}
    </div>
  );
}

export default ExamSchedule;