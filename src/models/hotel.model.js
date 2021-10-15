const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

// new model

const hotelSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: { type: String, required: true, trim: true },
    totalRooms: { type: Number },
    availableRooms: { type: Number, required: true },
    vote: { type: Number, default: 2 },
    imageCover: { type: String, required: true },
    images: [{ type: String }],
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
      },
    ],
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FeedBack',
      },
    ],
  },
  { timestamps: true }
);

hotelSchema.plugin(toJSON);

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
