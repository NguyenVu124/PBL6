const mongoose = require("mongoose");

const Table = new mongoose.Schema({
  totalSeats: { type: Number, required: true },
});

module.exports = mongoose.model("Table", Table);
