const express = require("express");
const Assignment = require("../models/Assignment");
const Task = require("../models/Task");

const router = express.Router();

router.get("/productivity", async (req, res) => {
  try {
    const completedTasks = await Task.countDocuments({
      status: "Completed",
    });

    const completedAssignments = await Assignment.countDocuments({
      status: "Completed",
    });

    res.json({
      activities: [],
      summary: {
        totalStudyHours: 0,
        completedTasks: completedTasks,
        completedAssignments: completedAssignments,
        activeDays: 0,
      },
    });
  } catch (error) {
    console.error("Analytics error:", error);

    res.status(500).json({
      message: "Failed to load productivity analytics",
    });
  }
});

module.exports = router;