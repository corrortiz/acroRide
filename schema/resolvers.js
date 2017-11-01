const UsersController = require('./../controllers/UsersController');

module.exports = {
   Query: {
      allUsers: () => {
         return UsersController.findAll();  
      },
      aUser: (_, {id}) => {
        return UsersController.find(id);
      }
   },
   Mutation: {
      addUser: (_, {data}) =>{
         return UsersController.create(data);  
      },
      deleteUser: (_, {id}) =>{
        return UsersController.delete(id);
      },
      modifyUser: (_, {data, id}) =>{
        return UsersController.edit(id, data);
      },
   }
 };