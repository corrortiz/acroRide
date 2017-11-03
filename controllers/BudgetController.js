const Budget = require('../models/Budget');
var util = require('util');
var fs = require('fs');

module.exports = {
   create(budgetProps){
      const budget = new Budget(budgetProps);
      return budget.save().then((res)=>{
            return Budget.findById(res._id)
                  .populate('User')
                  .populate('Vehicle')
                  .exec();
            });
      
   },
   delete(_id){
      return Budget.findByIdAndRemove({_id})
                        .populate('User')
                        .populate('Vehicle')
                        .exec();
   },
   edit(_id, budgetProps){
      return Budget.findByIdAndUpdate({_id}, budgetProps)
                        .populate('User')
                        .populate('Vehicle')
                        .exec();
   },
   find(_id){
      return Budget.findById(_id)
                        .populate('User')
                        .populate('Vehicle')
                        .exec();
   },
   findAll(){
      return Budget.find({})
                  .populate('User')
                  .populate('Vehicle')
                  .exec();
   },
   findAllByUser(userId){
      return Budget.find({User: userId})
                        .populate('User')
                        .populate('Vehicle')
                        .exec();
   },
   findAllByVehicle(vehicleId){
      return Budget.find({Vehicle: vehicleId})
                        .populate('User')
                        .populate('Vehicle')
                        .exec();
   },
};