var mongoose = require('mongoose');

// Create the InnehavSchema.
var AktieSchema = new mongoose.Schema({
  Namn: {
    type: String,
    required: true
  },
  Symbol: {
    type: String,
    required: true
  },
  ISIN: {
    type: String,
    required: true
  },
  Sektor: {
    type: String,
    required: true
  }
});


// Export the model.
module.exports = mongoose.model('aktie', AktieSchema, 'aktier');