const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      required: true,
    },

    type: {
      type: String,
      enum: ["Assignment", "Exam", "Study", "Other"],
      default: "Other",
    },

    completed: {
      type: Boolean,
      default: false,
    },

    email: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reminder", reminderSchema);