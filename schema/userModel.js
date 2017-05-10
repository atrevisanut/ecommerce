var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userModel = new Schema({
  email: String,
  username: {type: String, required: true},
  level: Number,
  location: String,
  member: Boolean,
  cart: {ref: 'Carts'}
});

module.exports = mongoose.model("User", userModel);
