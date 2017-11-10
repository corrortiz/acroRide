const Travel = require('../models/Travel');

module.exports = {
  create(travelProps) {
    const travel = new Travel(travelProps);
    return travel.save()
      .then(res => Travel.findById(res._id)
        .populate('User')
        .populate('Vehicle')
        .exec());
  },
  delete(_id) {
    return Travel.findByIdAndRemove({ _id })
      .populate('User')
      .populate('Vehicle')
      .exec();
  },
  edit(_id, travelProps) {
    return Travel.findByIdAndUpdate({ _id }, travelProps)
      .populate('User')
      .populate('Vehicle')
      .exec();
  },
  find(_id) {
    return Travel.findById(_id)
      .populate('User')
      .populate('Vehicle')
      .exec();
  },
  findAll() {
    return Travel.find({})
      .populate('User')
      .populate('Vehicle')
      .exec();
  },
  findAllByUser(userId) {
    return Travel.find({ User: userId })
      .populate('User')
      .populate('Vehicle')
      .exec();
  },
  findAllByVehicle(vehicleID) {
    return Travel.find({ Vehicle: vehicleID })
      .populate('User')
      .populate('Vehicle')
      .exec();
  },
};