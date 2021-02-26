'use strict';

if(process.env.NODE_ENV != "production"){
    require('dotenv').config({path: '.env'});
 } 

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
}