const express = require("express");
const router = express.Router();

const Reminder = require("../models/Reminder");

// GET all reminders
router.get("/", async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching reminders",
      error: error.message
    });
  }
});

// POST a reminder
router.post("/", async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    const savedReminder = await reminder.save();

    res.status(201).json(savedReminder);
  } catch (error) {
    res.status(500).json({
      message: "Error creating reminder",
      error: error.message
    });
  }
});

module.exports = router;