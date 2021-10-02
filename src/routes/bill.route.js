const express = require('express');
const { billController } = require('../controllers');

const router = express.Router();

router.route('/:userId').get(billController.getBills);

router
  .route('/:userId/:billId')
  .get(billController.getBill)
  .post(billController.createBill)
  .patch(billController.updateBill)
  .delete(billController.deleteBill);
