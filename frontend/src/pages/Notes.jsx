import { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  // Load notes from backend
  useEffect(() => {
    fetch("https://student-dashboard-backend-x92c.onrender.com/api/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  // Add note
  const addNote = async () => {
    const title = prompt("Enter note title:");

    if (!title) return;

    const newNote = {
      title: title,
      subject: "General",
      content: "New note",
    };

    try {
      const response = await fetch(
        "https://student-dashboard-backend-x92c.onrender.com/api/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNote),
        }
      );

      const savedNote = await response.json();

      setNotes([...notes, savedNote]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    try {
      await fetch(
        `https://student-dashboard-backend-x92c.onrender.com/api/notes/${id}`,
        {
          method: "DELETE",
        }
      );

      setNotes(
        notes.filter((note) => note._id !== id)
      );
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit note
  const editNote = async (id) => {
    const title = prompt("Enter new note title:");

    if (!title) return;

    try {
      const response = await fetch(
        `https://student-dashboard-backend-x92c.onrender.com/api/notes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
          }),
        }
      );

      const updatedNote = await response.json();

      setNotes(
        notes.map((note) =>
          note._id === id ? updatedNote : note
        )
      );
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  // Search notes
  const filteredNotes = notes.filter((note) =>
    note.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>📝 Notes</h1>
          <p>Create and manage your study notes.</p>
        </div>

        <button onClick={addNote}>
          + Add Note
        </button>
      </div>

      <input
        className="search-box"
        placeholder="🔍 Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="resource-grid">
        {filteredNotes.map((note) => (
          <div
            className="resource-card"
            key={note._id}
          >
            <h3>{note.title}</h3>

            <p>
              <strong>Subject:</strong>{" "}
              {note.subject}
            </p>

            <p>{note.content}</p>

            <button
              onClick={() => editNote(note._id)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteNote(note._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;