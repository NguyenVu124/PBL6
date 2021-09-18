const mongoose = require("mongoose");
const Feedback = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  vote: { type: Number, required: true },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});
module.exports = mongoose.model("feedback", Feedback);
