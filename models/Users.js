const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  organization: String,
  phones: [String],
  emails: [String],
  type: String,
  password: String,
  percentaje: String
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;