function Topbar({ darkMode, setDarkMode }) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 shadow-sm ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Search */}
      <div className="flex items-center gap-3">
        <span className="text-lg">🔍</span>

        <input
          type="text"
          placeholder="Search..."
          className={`rounded-lg border px-3 py-2 outline-none ${
            darkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "bg-gray-50"
          }`}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="text-xl">
          🔔
        </button>

        {/* Dark / Light Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`rounded-lg px-3 py-2 ${
            darkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Profile */}
        <div>
          <p className="font-semibold">
            Kruthika
          </p>

          <p className="text-sm text-gray-400">
            Student
          </p>
        </div>

      </div>
    </div>
  );
}

export default Topbar;