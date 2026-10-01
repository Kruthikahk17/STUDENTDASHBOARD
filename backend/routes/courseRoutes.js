const express = require("express");
const router = express.Router();

// GET /api/courses
router.get("/", (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Web Development",
      code: "CS301",
      teacher: "Dr. Smith",
      description: "An introduction to web development principles."
    },
    {
      _id: "2",
      name: "Database Management",
      code: "CS302",
      teacher: "Prof. Johnson",
      description: "Learn the fundamentals of database design."
    },
    {
      _id: "3",
      name: "Data Structures",
      code: "CS303",
      teacher: "Dr. Williams",
      description: "Basic to advanced data structures."
    }
  ]);
});

module.exports = router;