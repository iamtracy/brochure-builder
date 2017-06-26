var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = require('../models/product');
var User = require('../models/user');

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
    booth: req.body.booth,
    productName: req.body.productName,
    website: req.body.website,
    category: req.body.category
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
      obj: result
    });
  });
});

//create new product
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);
  Product.findById(req.params.id, function(err, message) {
    console.log(message);
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if (!message) {
      return res.status(500).json({
        title: 'no message found',
        error: { message: 'Message not found' }
      });
    }
    message.remove((err, result) => {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(201).json({
        message: 'Product deleted',
        obj: result
      });
    })

  });
});

module.exports = router;