'use strict';

const router = require("express").Router();

const homeRoutes = require("./home.routes");
const {ErrorMiddleware, NotFoundMiddleware, /* ParseIntMiddleware */CorsMiddleware} = require('../middlewares')

router.use('/home', homeRoutes);

router.use(ErrorMiddleware);
router.use(NotFoundMiddleware);
router.use(CorsMiddleware);

module.exports = router;