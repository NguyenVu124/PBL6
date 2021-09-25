const mongoose = require('mongoose');

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
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: 'Restaurant',
  },
  selfVehicle: { type: mongoose.Types.ObjectId, ref: 'SelfVehicle' },
  hotel: { type: mongoose.Types.ObjectId, ref: 'Hotel' },
});
module.exports = mongoose.model('Feedback', Feedback);
