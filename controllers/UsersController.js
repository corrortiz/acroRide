const Users = require('../models/Users');

module.exports = {
   create(userProps){
      const user = new Users(userProps);
      return user.save();
   },
   delete(_id){
      return Users.remove({_id});
   },
   edit(_id, userProps){
      return Users.update({_id}, userProps);
   },
   find(_id){
      return Users.findById(_id);
   },
   findAll(){
      return Users.find({});
   }
};