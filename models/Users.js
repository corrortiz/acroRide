const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  organization: String,
  phones: [String],
  emails: [String],
  type: String,
  password: String,
  percentaje: Number
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;