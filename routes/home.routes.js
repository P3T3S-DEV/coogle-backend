'use strict';

const router = require("express").Router();
const path = require('path')
router.get('/', (req, res)=>{
    res.send({
        message: "Hello world!"
    })
})

module.exports = router;