const express = require('express');
const hotelController = require('../controllers/hotel.controller');

const router = express.Router();

router.route('/').post(hotelController.createHotel).get(hotelController.getHotels);
router
  .route('/:hotelId')
  .get(hotelController.getHotel)
  .patch(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

router.route('/:hotelId/room').get(hotelController.getRooms);

router.route('/room').post(hotelController.createRoom);

router
  .route('/room/:roomId')
  .get(hotelController.getRoom)
  .patch(hotelController.updateRoom)
  .delete(hotelController.deleteRoom);

module.exports = router;
