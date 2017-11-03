const Budget = require('../models/Budget');
var util = require('util');
var fs = require('fs');

module.exports = {
   create(budgetProps){
      const budget = new Budget(budgetProps);
      return budget.save().then((res)=>{
               Budget.findById(res._id)
                  .populate('User')
                  .populate('Vehicle')
                  .exec((err, newBudget)=> {
                     return newBudget;
                  });
            });
      
   },
   create2(budgetProps){
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