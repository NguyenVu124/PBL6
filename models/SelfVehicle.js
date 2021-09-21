const mongoose = require("mongoose");

const types = ["Xe máy", "Ô tô 7 chỗ", "Ô tô 4 chỗ", "Xe đạp"];

const SelfVehicle = new mongoose.Schema({
  type: { type: String, enum: types, required: true, default: "Xe máy" },
  feedBacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeedBack",
    },
  ],
});

module.exports = mongoose.model("SelfVehicle", SelfVehicle);
