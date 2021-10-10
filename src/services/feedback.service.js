const httpStatus = require('http-status');
const { Feedback } = require('../models');
const ApiError = require('../utils/ApiError');

const createFeedback = async (feedbackBody) => {
  return Feedback.create(feedbackBody);
};

const getFeedbacksByUserId = async (userId) => {
  const feedbacks = await Feedback.find({ user: userId });
  return feedbacks;
};
const getFeedbacksByServiceId = async (service, serviceId) => {
  let query = {};
  if (service === 'restaurant') query = { restaurant: serviceId };
  if (service === 'hotel') query = { hotel: serviceId };
  if (service === 'selfVehicle') query = { selfVehicle: serviceId };
  const feedbacks = await Feedback.find(query);
  return feedbacks;
};

const getFeedbackById = async (id) => {
  return Feedback.findById(id);
};

const updateFeedbackById = async (feedbackId, updateBody) => {
  const feedback = await getFeedbackById(feedbackId);
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback not found');
  }
  Object.assign(feedback, updateBody);
  await feedback.save();
  return feedback;
};

const deleteFeedbackById = async (feedbackId) => {
  const feedback = await getFeedbackById(feedbackId);
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback not found');
  }
  await feedback.remove();
  return feedback;
};

module.exports = {
  createFeedback,
  getFeedbacksByUserId,
  getFeedbacksByServiceId,
  getFeedbackById,
  updateFeedbackById,
  deleteFeedbackById,
};
