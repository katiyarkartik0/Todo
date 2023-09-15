const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskSignature: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  { timestaps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
