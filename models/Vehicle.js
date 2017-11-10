const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  name: String,
  passengers: Number,
  largeBags: Number,
  smallBags: Number,
  doors: Number,
  type: String,
  status: Boolean,
  imagesUrls: [String],
  description: {
    es: String,
    en: String
  }
});

const Vehicle = mongoose.model('vehicle', VehicleSchema);

module.exports = Vehicle;