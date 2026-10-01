import { useEffect, useState } from "react";

function LearningResources() {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // ================================
  // FETCH RESOURCES
  // ================================
  useEffect(() => {
    fetch("https://student-dashboard-backend-x92c.onrender.com/api/resources", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }

        return res.json();
      })
      .then((data) => {
        setResources(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
      });
  }, []);

  // ================================
  // SEARCH + FILTER
  // ================================
  const filteredResources = resources.filter((resource) => {
    const title = resource.title || "";
    const subject = resource.subject || "";
    const type = resource.resourceType || "";

    const matchesSearch =
      title.toLowerCase().includes(search.toLowerCase()) ||
      subject.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || type === filter;

    return matchesSearch && matchesFilter;
  });

  // ================================
  // ADD RESOURCE
  // ================================
  const addResource = async () => {
    const title = prompt("Enter resource title:");

    if (!title) {
      return;
    }

    const newResource = {
      title: title,
      subject: "General",
      resourceType: "Website",
      url: "https://www.google.com/",
      description: "New learning resource",
    };

    try {
      const response = await fetch(
        "https://student-dashboard-backend-x92c.onrender.com/api/resources",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },

          body: JSON.stringify(newResource),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add resource");
      }

      const savedResource = await response.json();

      setResources((prevResources) => [
        ...prevResources,
        savedResource,
      ]);

    } catch (error) {
      console.error("Error adding resource:", error);
      alert("Could not add resource.");
    }
  };

  // ================================
  // DELETE RESOURCE
  // ================================
  const deleteResource = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resource?")) {
      return;
    }

    try {
      const response = await fetch(
        `https://student-dashboard-backend-x92c.onrender.com/api/resources/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        console.error("Backend error:", errorData);

        throw new Error(
        errorData.message || `Request failed with status ${response.status}`
     );
   }

      setResources((prevResources) =>
        prevResources.filter(
          (resource) => (resource._id || resource.id) !== id
        )
      );

    } catch (error) {
      console.error("Error deleting resource:", error);
      alert("Could not delete resource.");
    }
  };

  // ================================
  // PAGE
  // ================================
  return (
    <div className="page-container">

      {/* HEADER */}
      <div className="page-header">

        <div>
          <h1>📚 Learning Resources</h1>

          <p>
            Organize your study materials and learning resources.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={addResource}
        >
          + Add Resource
        </button>

      </div>


      {/* SEARCH + FILTER */}
      <div className="resource-tools">

        <input
          type="text"
          placeholder="🔍 Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Resources</option>
          <option value="PDF">PDF</option>
          <option value="Video">Video</option>
          <option value="Website">Website</option>
          <option value="Book">Book</option>
        </select>

      </div>


      {/* RESOURCE CARDS */}
      <div className="resource-grid">

        {filteredResources.length > 0 ? (

          filteredResources.map((resource) => {

            const resourceId =
              resource._id || resource.id;

            return (
              <div
                className="resource-card"
                key={resourceId}
              >

                <div className="resource-icon">
                  {resource.resourceType === "PDF"
                    ? "📄"
                    : resource.resourceType === "Video"
                    ? "🎥"
                    : resource.resourceType === "Book"
                    ? "📚"
                    : "🌐"}
                </div>


                <div className="resource-content">

                  <span className="resource-type">
                    {resource.resourceType}
                  </span>

                  <h3>
                    {resource.title}
                  </h3>

                  <p>
                    <strong>Subject:</strong>{" "}
                    {resource.subject}
                  </p>

                  <p>
                    {resource.description}
                  </p>


                  <div className="card-actions">

                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="resource-button"
                    >
                      Open →
                    </a>

                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteResource(resourceId)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            );
          })

        ) : (

          <div className="empty-resources">
            <div>📚</div>

            <h3>No resources found</h3>

            <p>
              Try another search or add a new learning resource.
            </p>
          </div>

        )}

      </div>

    </div>
  );
}

export default LearningResources;