const Users = require('../models/Users');

module.exports = {
   create(userProps){
      const user = new Users(userProps);
      return user.save();
   },
   delete(_id){
      return Users.findByIdAndRemove({_id});
   },
   edit(_id, userProps){
      return Users.findByIdAndUpdate({_id}, userProps);
   },
   find(_id){
      return Users.findById(_id);
   },
   findAll(){
      return Users.find({});
   }
};