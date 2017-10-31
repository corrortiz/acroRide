const Vehicle = require('../models/Vehicle');

module.exports = {
   create(vehicleProps){
      const vehicle = new Vehicle(vehicleProps);
      vehicle.save(function(err, vehicle){
         if(err){
            return {error: "Something went wrong creating a vehicle"};
         }else{
            return vehicle;
         }
      });
   },
   delete(_id){
      return Vehicle.remove({_id});
   },
   edit(_id, vehicleProps){
      return Vehicle.update({_id}, vehicleProps);
   },
   find(_id){
      return Vehicle.findById(_id);
   },
   findAll(){
      return Vehicle.find({});
   }
};