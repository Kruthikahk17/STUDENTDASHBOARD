function Courses() {
  const courses = [
    {
      name: "Web Development",
      code: "CS301",
      instructor: "Dr. Smith",
      progress: "85%",
    },
    {
      name: "Database Management",
      code: "CS302",
      instructor: "Prof. Johnson",
      progress: "72%",
    },
    {
      name: "Computer Networks",
      code: "CS303",
      instructor: "Dr. Williams",
      progress: "64%",
    },
    {
      name: "Machine Learning",
      code: "CS304",
      instructor: "Prof. Brown",
      progress: "58%",
    },
  ];

  return (
    <div className="page">

      <div className="page-heading">
        <div>
          <p className="section-label">ACADEMICS</p>
          <h2>My Courses</h2>
          <p>View and track all your enrolled courses.</p>
        </div>
      </div>

      <div className="course-grid">

        {courses.map((course) => (
          <div className="course-card" key={course.code}>

            <div className="course-top">
              <div className="course-icon">📚</div>

              <span>{course.code}</span>
            </div>

            <h3>{course.name}</h3>

            <p className="instructor">
              Instructor: {course.instructor}
            </p>

            <div className="progress-title">
              <span>Course Progress</span>
              <strong>{course.progress}</strong>
            </div>

            <div className="progress-bar">
              <div style={{ width: course.progress }}></div>
            </div>

            <button className="course-button">
              View Course
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Courses;