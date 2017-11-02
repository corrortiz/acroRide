const Budget = require('../models/Budget');

module.exports = {
   create(budgetProps){
      const budget = new Budget(budgetProps);
      return budget.save();
   },
   delete(_id){
      return Budget.findByIdAndRemove({_id});
   },
   edit(_id, budgetProps){
      return Budget.findByIdAndUpdate({_id}, budgetProps);
   },
   find(_id){
      return Budget.findById(_id);
   },
   findAll(){
      return Budget.find({});
   },
   findAllByUser(userId){
      return Budget.find({User: userId});
   },
   findAllByVehicle(vehicleId){
      return Budget.find({Vehicle: vehicleId});
   },
};