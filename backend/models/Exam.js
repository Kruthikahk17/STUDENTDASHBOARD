const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
    },

    examDate: {
      type: Date,
      required: true,
    },

    startTime: {
      type: String,
      default: "",
    },

    room: {
      type: String,
      default: "",
    },

    syllabus: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Upcoming", "Completed"],
      default: "Upcoming",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exam", examSchema);