const Vehicle = require('../models/Vehicle');

module.exports = {
   create(vehicleProps){
      const vehicle = new Vehicle(vehicleProps);
      return vehicle.save();
   },
   delete(_id){
      return Vehicle.findByIdAndRemove({_id});
   },
   edit(_id, vehicleProps){
      return Vehicle.findByIdAndUpdate({_id}, vehicleProps);
   },
   find(_id){
      return Vehicle.findById(_id);
   },
   findAll(){
      return Vehicle.find({});
   }
};