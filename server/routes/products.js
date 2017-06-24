var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = require('../models/product');

//get all products
router.get('/', (req, res, next) => {
  // .populate('user', 'firstName')
  Product.find()
    .exec(function(err, messages) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Get message successful',
        obj: messages
      });
    });
});


router.post('/', function(req, res, next) {
  var newProduct = new Product({
    location: req.body.logo,
    productName: req.body.productName,
    website: req.body.website,
    logo: req.body.logo
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

module.exports = router;