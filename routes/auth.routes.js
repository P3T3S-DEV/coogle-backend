"use strict";

const router = require("express").Router();
const { AuthController } = require("../controllers");

router.post("/signin", AuthController.signin);

router.post("/signup", AuthController.signup);

router.get("/validate", AuthController.validate);

module.exports = router;
