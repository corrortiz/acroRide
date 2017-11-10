const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariablesSchema = new Schema({
  viatics: {
    type: Number,
    default: 1
  },
  foods: {
    type: Number,
    default: 1
  },
  salary: {
    type: Number,
    default: 1
  },
  hotel: {
    type: Number,
    default: 1
  },
  gas: {
    type: Number,
    default: 1
  },
  floorRight: {
    type: Number,
    default: 1
  },
  tollCost: {
    type: Number,
    default: 1
  },
  guide: {
    type: Number,
    default: 1
  },
  lunchBox: {
    type: Number,
    default: 1
  }
});

const Variables = mongoose.model('variables', VariablesSchema);

module.exports = Variables;