const httpStatus = require('http-status');
const { Hotel, Room } = require('../models');
const ApiError = require('../utils/ApiError');

const createHotel = async (hotelBody) => {
  return Hotel.create(hotelBody);
};

const getHotels = async () => {
  const hotels = await Hotel.find();
  return hotels;
};

const getHotelById = async (id) => {
  return Hotel.findById(id);
};

const updateHotelById = async (hotelId, updateBody) => {
  const hotel = await getHotelById(hotelId);
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hotel not found');
  }
  Object.assign(hotel, updateBody);
  await hotel.save();
  return hotel;
};

const deleteHotelById = async (hotelId) => {
  const hotel = await getHotelById(hotelId);
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hotel not found');
  }
  await hotel.remove();
  return hotel;
};

const getRooms = async (hotelId) => {
  const roomsId = await Hotel.findById(hotelId).select('rooms');
  const rooms = await Room.find({ _id: roomsId.rooms });
  return rooms;
};

const createRoom = async (roomBody) => {
  return Room.create(roomBody);
};

const getRoomById = async (id) => {
  return Room.findById(id);
};

const updateRoomById = async (roomId, updateBody) => {
  const room = await getRoomById(roomId);
  if (!room) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
  }
  Object.assign(room, updateBody);
  await room.save();
  return room;
};

const deleteRoomById = async (roomId) => {
  const room = await getRoomById(roomId);
  if (!room) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
  }
  await room.remove();
  return room;
};

module.exports = {
  createHotel,
  getHotels,
  getHotelById,
  updateHotelById,
  deleteHotelById,
  getRooms,
  createRoom,
  getRoomById,
  updateRoomById,
  deleteRoomById,
};
