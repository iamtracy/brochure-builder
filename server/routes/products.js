var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = require('../models/product');

//get all products
router.get('/', (req, res, next) => {
  Product.find()
    .exec(function(err, messages) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Get product successful',
        obj: messages
      });
    });
});

//create new product
router.post('/', function(req, res, next) {
  const newProduct = new Product({
    city: req.body.city,
    productName: req.body.productName,
    website: req.body.website,
    logo: req.body.logo
  });
  newProduct.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'Product created',
      obj: result,
      foo: req.body
    });
  });
});

module.exports = router;