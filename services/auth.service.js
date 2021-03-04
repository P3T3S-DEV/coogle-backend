"use strict";
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model");
const { generateToken } = require("../helpers/jwt.helper");
const { UserRepository } = require("../repositories");
const { SECRET } = require("../config");

const signin = async (user) => {
  const { username, password } = user;
  const userExist = await UserRepository.getUserByUsername(username);
  if (!userExist) {
    const error = new Error();
    error.status = 404;
    error.message = "User does not exist";
    throw error;
  }

  const validPassword = userExist.comparePasswords(password);

  if (!validPassword) {
    const error = new Error();
    error.status = 400;
    error.message = "Invalid password";
    throw error;
  }

  const userToEncode = {
    username: userExist.username,
    id: userExist._id,
  };

  const token = generateToken(userToEncode);

  return { token, user: userExist };
};

const signup = async (user) => {
  const { username } = user;
  const userExist = await UserRepository.getUserByUsername(username);
  if (userExist) {
    const error = new Error();
    error.status = 400;
    error.message = "User already exists";
    throw error;
  }
  return await userModel.create(user);
};

const validate = async (token) => {
  if (!token) {
    const error = new Error();
    error.message = "Token must be sent";
    error.status = 400;
    throw error;
  }
  const user = jwt.verify(token, SECRET, function (err, decodedToken) {
    if (err) {
      const error = new Error();
      error.message = "Invalid token";
      error.status = 401;
      throw error;
    }
    return decodedToken.user;
  });

  return user;
};

module.exports = {
  signin,
  signup,
  validate,
};
