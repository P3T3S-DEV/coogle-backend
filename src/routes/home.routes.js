'use strict';

const router = require("express").Router();

router.get('/', async (req, res)=>{
    res.send("hello world");
})

module.exports = router;