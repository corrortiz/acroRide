const Users = require('../models/Users');

module.exports = {
   create(userProps){
      const user = new Users(userProps);
      user.save(function(err, user){
         if(err){
            return {error: "Something went wrong creating a user"};
         }else{
            return user;
         }
      });
   },
   delete(_id){
      return Users.remove({_id});
   },
   edit(_id, userProps){
      return Users.update({_id}, userProps);
   },
   find(_id){
      return Users.findById(_id);
   }
};