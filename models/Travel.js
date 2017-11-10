const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  User: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  Vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'vehicle'
  }
});

const Travel = mongoose.model('travel', TravelSchema);

module.exports = Travel;