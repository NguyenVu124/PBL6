const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

exports.createHotel = async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    console.log(req.body);
    await hotel.save();
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};
exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    console.log(req.body);
    await room.save();
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

exports.listHotel = async (req, res) => {
  res.send('Hotels');
};
