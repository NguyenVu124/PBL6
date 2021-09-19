const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(req.body);
    await user.save();
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
