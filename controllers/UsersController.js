const Users = require('../models/Users');
const bcrypt = require('bcrypt');

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
   },
   auhtUser(_id, password){
       return Users.findById({_id}).then((user)=>{
         return bcrypt.compare(password, user.password).then((err, isMatch) => {
            return new Promise((resolve, reject)=>{
               if(isMatch == false){ reject("Invalid credentials"); }
               resolve(user);
            }).catch(err=>console.warn(err));
          });
      });
   },
};