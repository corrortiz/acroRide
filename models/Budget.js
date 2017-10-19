const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./Users');
const Vehicle = require('./Vehicle');

const BudgetSchema = new Schema({
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
   budgetDate: Date,
   aprove: Boolean,
   User: User,
   Vehicle: Vehicle
});

const Budget = mongoose.model('budget', BudgetSchema);

module.exports = Budget;