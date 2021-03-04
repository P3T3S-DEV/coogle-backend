"use strict";

const { AuthService } = require("../services");

const signin = async (req, res) => {
  const { body } = req;
  const creds = await AuthService.signin(body);
  return res.send(creds);
};

const signup = async (req, res) => {
  const { body } = req;
  const createdUser = await AuthService.signup(body);
  return res.status(201).send(createdUser);
};

const validate = async (req, res) => {
  const token = req.headers["authorization"];
  const tokenValidated = await AuthService.validate(token);
  return res.send(tokenValidated);
};

module.exports = {
  signin,
  signup,
  validate,
};
