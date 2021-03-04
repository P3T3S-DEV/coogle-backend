const mongoose = require("mongoose");
const { MONGO_URI } = require("../config");
const UserModel = require("../models/user.model");

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

const user = {
  username: "Jhon",
  email: "jhondoe@test.com",
  password: "jhon123",
};

UserModel.create(user)
  .then(() => {
    console.log("data inserted");
    mongoose.disconnect();
  })
  .catch(console.log);
