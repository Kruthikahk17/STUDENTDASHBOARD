import { useState } from "react";

function Resources() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");

  const resources = [
    {
      id: 1,
      title: "React Tutorial",
      subject: "Web Development",
      type: "Video",
      link: "https://react.dev",
    },
    {
      id: 2,
      title: "Python Programming",
      subject: "Programming",
      type: "Website",
      link: "https://python.org",
    },
    {
      id: 3,
      title: "MongoDB Basics",
      subject: "Database",
      type: "Article",
      link: "https://www.mongodb.com/docs/",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      subject: "AI",
      type: "PDF",
      link: "#",
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSubject =
      subject === "All" || resource.subject === subject;

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="p-6">

      {/* Page Heading */}
      <h1 className="text-2xl font-bold">
        Learning Resources
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your learning resources here.
      </p>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mt-6">

        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-80"
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="All">All Subjects</option>
          <option value="Web Development">
            Web Development
          </option>
          <option value="Programming">
            Programming
          </option>
          <option value="Database">
            Database
          </option>
          <option value="AI">
            AI
          </option>
        </select>

      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="border rounded-xl p-5 shadow-sm bg-white"
          >
            <h2 className="text-lg font-semibold">
              {resource.title}
            </h2>

            <p className="mt-2 text-gray-600">
              Subject: {resource.subject}
            </p>

            <p className="text-gray-600">
              Type: {resource.type}
            </p>

            <a
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-600 font-medium"
            >
              Open Resource →
            </a>
          </div>
        ))}

      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <p className="mt-8 text-gray-500">
          No resources found.
        </p>
      )}

    </div>
  );
}

export default Resources;