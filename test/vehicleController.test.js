const chai = require('chai');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;

const VehicleController = require('../controllers/VehicleController');
const Vehicle = require('../models/Vehicle');

const { dummyVehicle, vehicleID, populateVehicle} = require('./testHelper');
//ID for the mock vehicle
const {ObjectID} = require('mongodb');
const newVehicleID = new ObjectID();

beforeEach(populateVehicle);

describe.only('VEHICLE CONTROLLER CRUD TEST', () => {
   it('should create a vehicle', (done) => { 
      const newVehicle = new Vehicle(dummyVehicle);
      newVehicle._id = newVehicleID;
      newVehicle.save(function(err, vehicle){
         if(err){
            return {error: "Something went wrong creating a vehicle"};
         }else{
            return vehicle;
         }
      }).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('name');
         res.name.should.equal(dummyVehicle.name);
         done();
      }).catch((err) => done(err));
   });

   it('should find all vehicles', (done) => {
      VehicleController.findAll().then((res)=>{
         res.should.be.a('array');
         res[0].should.have.property('doors');
         res[0].doors.should.equal(dummyVehicle.doors);
         done();
      }).catch((err) => done(err));
   });

   
   it('should find a vehicle by id', (done) => {
      VehicleController.find(vehicleID).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('doors');
         res.doors.should.equal(dummyVehicle.doors);
         done();
      }).catch((err) => done(err));
   });
   
   it('should modify a vehicle find by a id', (done) => {
      var newName = {name: 'Alfredo Ortiz Muñoz'};
      VehicleController.edit(vehicleID, newName).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('ok');
         res.ok.should.equal(1);
         done();
      }).catch((err) => done(err));
   });

   it('should delete a vehicle find by a id', (done) => {
      VehicleController.delete(vehicleID).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('result');
         res.result.ok.should.equal(1);
         done();
      }).catch((err) => done(err));
   });
});