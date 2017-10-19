const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./Users');
const Vehicle = require('./Vehicle');

const TravelSchema = new Schema({
   finalTotalCost: {
      es: String,
      en: String
   },
   budgetTotalCost: {
      es: String,
      en: String
   },
   destinoInicial: String,
   destinoFinal: String,
   tiempoAproximado: Number,
   distancia: Number,
   tollCost: Number,
   tolls: [String],
   actualDate: Date,
   aprove: Boolean,
   User: User,
   Vehicle: Vehicle
});

const Travel = mongoose.model('travel', TravelSchema);

module.exports = Travel;