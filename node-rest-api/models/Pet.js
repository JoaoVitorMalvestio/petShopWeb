var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
  name: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pet', PetSchema);