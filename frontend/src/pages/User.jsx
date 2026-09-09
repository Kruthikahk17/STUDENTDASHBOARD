function Profile() {

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p className="label">ACCOUNT</p>
          <h1>My Profile</h1>
          <p>Manage your student information.</p>
        </div>
      </div>

      <div className="profile-layout">

        <div className="profile-card">

          <div className="large-avatar">
            K
          </div>

          <h2>Student</h2>
          <p>Computer Science</p>

          <div className="profile-badge">
            Active Student
          </div>

        </div>

        <div className="profile-details">

          <h2>Personal Information</h2>

          <div className="profile-grid">

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                value="Student"
                readOnly
              />
            </div>

            <div className="input-group">
              <label>Student ID</label>
              <input
                type="text"
                value="CS2026001"
                readOnly
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value="student@example.com"
                readOnly
              />
            </div>

            <div className="input-group">
              <label>Department</label>
              <input
                type="text"
                value="Computer Science"
                readOnly
              />
            </div>

            <div className="input-group">
              <label>Semester</label>
              <input
                type="text"
                value="6th Semester"
                readOnly
              />
            </div>

            <div className="input-group">
              <label>Academic Year</label>
              <input
                type="text"
                value="2026"
                readOnly
              />
            </div>

          </div>

          <button className="primary-button">
            Edit Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;