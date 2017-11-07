const Budget = require('../models/Budget');
const Variables = require('../models/Variables');
const { ObjectID } = require('mongodb');

module.exports = {
   create(budgetProps){
      //create two objects one variable and the other budget
      const budget = new Budget(budgetProps);
      const variables = new Variables(budgetProps.Variables);
      //associate budget with variables
      budget.Variables = variables;
      //Save the two objects at the same time, when it finishes it returns the object that was saved
      return Promise.all([budget.save(), variables.save()])
            .then(res => res[0]);
   },
   delete(_id){
      return Budget.findByIdAndRemove({_id})
                        .populate('User')
                        .populate('Vehicle')
                        .populate('Variables')
                        .exec();
   },
   edit(_id, budgetProps){
      var variablesProps = budgetProps.Variables;

      return Promise.all([
            Budget.findByIdAndUpdate({_id}, budgetProps).populate('Variable'), 
            Variables.findByIdAndUpdate({_id: budgetProps.Variables._id}, variablesProps)]
      ).then(res=>res[0]);
   },
   find(_id){
      return Budget.findById(_id)
                        .populate('User')
                        .populate('Vehicle')
                        .populate('Variables')
                        .exec();
   },
   findAll(){
      return Budget.find({})
                  .populate('User')
                  .populate('Vehicle')
                  .populate('Variables')
                  .exec();
   },
   findAllByUser(userId){
      return Budget.find({User: userId})
                        .populate('User')
                        .populate('Vehicle')
                        .populate('Variables')
                        .exec();
   },
   findAllByVehicle(vehicleId){
      return Budget.find({Vehicle: vehicleId})
                        .populate('User')
                        .populate('Vehicle')
                        .populate('Variables')
                        .exec();
   },
};