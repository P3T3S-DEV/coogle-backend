"use strict";

const router = require("express").Router();

const homeRoutes = require("./home.routes");
const authRoutes = require("./auth.routes");
const noteRoutes = require("./note.routes");

const {
  ErrorMiddleware,
  NotFoundMiddleware /* ParseIntMiddleware */,
} = require("../middlewares");

router.use("/home", homeRoutes);
router.use("/auth", authRoutes);
router.use("/note", noteRoutes);

router.use(ErrorMiddleware);
router.use(NotFoundMiddleware);

module.exports = router;
