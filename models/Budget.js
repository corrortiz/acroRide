const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./Variables');


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
   tolls: [String],
   budgetDate: Date,
   aprove: Boolean,
   User: {
      type: Schema.Types.ObjectId,
      ref: 'users'
   },
   Vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle'
   },
   Variables: {
      type: Schema.Types.ObjectId,
      ref: 'variables'
   },
});

const Budget = mongoose.model('budget', BudgetSchema);

module.exports = Budget;