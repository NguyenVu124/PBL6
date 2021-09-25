const express = require('express');
const hotelController = require('../../controllers/hotel.controller');

const router = express.Router();

router.post('/hotel/addHotel', hotelController.createHotel);
router.post('/hotel/addRoom', hotelController.createRoom);
router.get('/hotel/listHotels', hotelController.listHotel);

module.exports = router;
