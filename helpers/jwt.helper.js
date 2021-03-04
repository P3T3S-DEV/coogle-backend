const { sign } = require('jsonwebtoken');
const { SECRET } = require('../config');

module.exports.generateToken = function(user){
    return sign({ user }, SECRET, {expiresIn: "12h"});
}