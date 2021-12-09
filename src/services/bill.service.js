const httpStatus = require('http-status');
const { Bill } = require('../models');
const ApiError = require('../utils/ApiError');

const createBill = async (billBody) => {
  return Bill.create(billBody);
};

const getBills = async () => {
  const bills = await Bill.find();
  return bills;
};

const getBillById = async (id) => {
  const service = await Bill.findById(id).select('service -_id');
  let result = null;
  if (service.service === 'hotel') {
    result = await Bill.findById(id).populate('hotel').populate('room').exec();
  } else if (service.service === 'restaurant') {
    result = await Bill.findById(id).populate('restaurant').populate('table').exec();
  } else if (service.service === 'selfVehicle') {
    result = await Bill.findById(id).populate('selfVehicle').populate('detailVehicle').exec();
  }
  return result;
};

const updateBillById = async (BillId, updateBody) => {
  const bill = await getBillById(BillId);
  if (!bill) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bill not found');
  }
  Object.assign(bill, updateBody);
  await bill.save();
  return bill;
};

const deleteBillById = async (billId) => {
  const bill = await getBillById(billId);
  if (!bill) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bill not found');
  }
  await bill.remove();
  return bill;
};

module.exports = {
  createBill,
  getBills,
  getBillById,
  updateBillById,
  deleteBillById,
};
