'use strict';

const router = require("express").Router();

const homeRoutes = require("./home.routes");
const {ErrorMiddleware, NotFoundMiddleware, /* ParseIntMiddleware */} = require('../middlewares')

router.use('/home', homeRoutes);

router.use(ErrorMiddleware);
router.use(NotFoundMiddleware);

module.exports = router;