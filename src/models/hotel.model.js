const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true },
  totalRooms: { type: Number },
  availableRooms: { type: Number, required: true },
  vote: { type: Number, default: 2 },
  images: [{ type: String }],
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },
  ],
  feedBacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FeedBack',
    },
  ],
});

module.exports = mongoose.model('Hotel', hotelSchema);
