var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  booth: { type: String },
  productName: { type: String },
  website: { type: String },
  logo: { type: String },
  category: { type: String }
});

module.exports = mongoose.model('Product', schema);