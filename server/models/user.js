var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: { type: String, required: true, },
  lastName: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
  products: { type: Array }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);