const jwt = require('jsonwebtoken')
const User = require('../models/user')



const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: 'Please authenticate' });
    }
}

module.exports = auth