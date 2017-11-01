const Travel = require('../models/Travel');

module.exports = {
   create(travelProps){
      const travel = new Travel(travelProps);
      travel.save(function(err, travel){
         if(err){
            return {error: "Something went wrong creating a travel"};
         }else{
            return travel;
         }
      });
   },
   delete(_id){
      return Travel.remove({_id});
   },
   edit(_id, travelProps){
      return Travel.update({_id}, travelProps);
   },
   find(_id){
      return Travel.findById(_id);
   },
   findAll(){
      return Travel.find({});
   }
};