var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
  name: String,
  color: String,
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pet', PetSchema);