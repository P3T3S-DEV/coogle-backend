"use strict";
const userModel = require("../models/user.model");

const getUserByUsername = async (username) => {
  return await userModel.findOne({ username });
};

module.exports = {
  getUserByUsername,
};
