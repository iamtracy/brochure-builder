var express = require('express');

var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://tleecoding:Hackthis!23@ds135522.mlab.com:35522/pmmi', ['products']);

//get all products
router.get('/', (req, res, next) => {
  db.products.find((err, products) => {
    if (err) {
      return res.send(err);
    }
    res.json(products);
  });
});

//get all products
router.get('/:id', (req, res, next) => {
  db.products.findOne({ _id: mongojs.ObjectId(req.params.id) },
    (err, product) => {
      if (err) {
        return res.send(err);
      }
      res.json(product);
    });
});

//save a product
//get all products
router.post('/', (req, res, next) => {
  var product = req.body;
  if (!product.title) {
    res.status(400);
    res.json({ message: 'Data is invalid' });
  } else {
    db.product.save(product, (err, product) => {
      if (err) {
        return res.send(err);
      }
      res.json(product);
    });
  }
});

//delete a product
router.delete('/:id', (req, res, next) => {
  db.products.remove({ _id: mongojs.ObjectId(req.params.id) },
    (err, product) => {
      if (err) {
        return res.send(err);
      }
      res.json(product);
    });
});

//update a product
router.put('/:id', (req, res, next) => {
  var product = req.body;
  if (!product) {
    res.status(400);
    res.json({ message: 'Product is invalid' });
  } else {
    db.products.update({ _id: mongojs.ObjectId(req.params.id) },
      null,
      null,
      (err, product) => {
        if (err) {
          return res.send(err);
        }
        res.json(product);
      });
  }
});

module.exports = router;