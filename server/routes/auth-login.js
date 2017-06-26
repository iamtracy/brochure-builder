var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: { message: 'Invalid Login credentials' }
      })
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: { message: 'Invalid Login credentials' }
      });
    }
    var token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 });
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id,
      admin: (user._id == "594f0807f13d651f8558527a" || user._id == "5950f0e8a2385bba25575c49" ? true : null)
    });
  });
});

module.exports = router;