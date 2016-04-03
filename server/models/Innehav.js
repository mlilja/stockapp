var mongoose = require('mongoose');

// Create the InnehavSchema.
var InnehavSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true
  },
  antal: {
    type: Number,
    required: true
  }
});


// Export the model.
module.exports = mongoose.model('innehav', InnehavSchema);