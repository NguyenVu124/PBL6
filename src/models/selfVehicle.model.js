const mongoose = require('mongoose');

const SelfVehicle = new mongoose.Schema({
  name: {
    type: String,
  },
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  feedBacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FeedBack',
    },
  ],
  address: { type: String, required: true },
  vote: { type: Number },
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DetailVehicle' }],
  images: [{ type: String }],
  imageCover: { type: String, required: true },
});

module.exports = mongoose.model('SelfVehicle', SelfVehicle);
