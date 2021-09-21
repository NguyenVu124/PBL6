const mongoose = require("mongoose");
const validator = require("validator");

const roles = ["Guest", "Admin", "Partner"];
const type = ["Hotel", "Restaurant", "Self vehicle", "Bus"];
const gender = ["Male", "Female"];

const User = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate(value) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error(
          "Password must contain at least one letter and one number"
        );
      }
    },
  },
  role: {
    type: String,
    enum: roles,
    default: "Guest",
  },
  name: {
    type: String,
    trim: true,
  },
  birth: {
    type: Date,
  },
  phone: {
    type: String,
    // validate(value) {
    //   if (!value.match(/((09|03|07|08|05)+([0-9]{8})\b)/g)) {
    //     throw new Error("Phone number invalid!");
    //   }
    // },
  },
  typeBusiness: { type: String, enum: type },
  businessIdentifier: {
    type: String,
  },
  isValid: {
    type: Boolean,
  },
  gender: { type: String, enum: gender },
  identityNumber: {
    type: String,
  },
});

module.exports = mongoose.model("User", User);
