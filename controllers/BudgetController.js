const Budget = require('../models/Budget');

module.exports = {
   create(budgetProps){
      const budget = new Budget(budgetProps);
      budget.save(function(err, budget){
         if(err){
            return {error: "Something went wrong creating a budget"};
         }else{
            return budget;
         }
      });
   },
   delete(_id){
      return Budget.remove({_id});
   },
   edit(_id, budgetProps){
      return Budget.update({_id}, budgetProps);
   },
   find(_id){
      return Budget.findById(_id);
   },
   findAll(){
      return Budget.find({});
   }
};