"use strict";
const userModel = require("../models/user.model");

const getUserById = async (userId) =>{
  return await userModel.findById(userId);
}
const getUserByUsername = async (username) => {
  return await userModel.findOne({ username }, "-categories -notes");
};

const updateUser = async (id, user) => {
  return await userModel.findByIdAndUpdate(id, user, { new: true });
};

module.exports = {
  getUserById,
  updateUser,
  getUserByUsername
};
