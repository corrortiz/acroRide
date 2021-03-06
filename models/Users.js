const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

UsersSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;