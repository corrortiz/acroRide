const UsersController = require('./../controllers/UsersController');
const VehicleController = require('./../controllers/VehicleController');

module.exports = {
   Query: {
      allUsers: () => {
         return UsersController.findAll();  
      },
      aUser: (_, {id}) => {
        return UsersController.find(id);
      },
      allVehicles: () => {
         return VehicleController.findAll();  
      },
      aVehicle: (_, {id}) => {
        return VehicleController.find(id);
      },
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
      addVehicle: (_, {data}) =>{
         return VehicleController.create(data);  
      },
      deleteVehicle: (_, {id}) =>{
        return VehicleController.delete(id);
      },
      modifyVehicle: (_, {data, id}) =>{
        return VehicleController.edit(id, data);
      },
   }
 };