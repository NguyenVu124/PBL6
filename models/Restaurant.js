const mongoose = require("mongoose");

const Restaurant = new mongoose.Schema({
  city: { type: String, required: true },
  address: { type: String, required: true },
  totalTables: { type: Number, required: true },
  availableTables: { type: Number, required: true },
  feedBacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeedBack",
    },
  ],
});

module.exports = mongoose.model("Restaurant", Restaurant);
