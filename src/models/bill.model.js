const mongoose = require('mongoose');

const Bill = new mongoose.Schema(
  {
    service: {
      type: String,
    },
    additionalFee: { type: Number },
    total: { type: Number },
    checkIn: { type: Date },
    checkOut: { type: Date },
    status: { type: Boolean },
    guest: { type: mongoose.Types.ObjectId, ref: 'User' },
    room: {
      type: mongoose.Types.ObjectId,
      ref: 'Room',
    },
    table: { type: mongoose.Types.ObjectId, ref: 'Table' },
    detailVehicle: { type: mongoose.Types.ObjectId, ref: 'DetailVehicle' },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Bill', Bill);
