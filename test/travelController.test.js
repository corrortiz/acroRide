const chai = require('chai');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;

const TravelController = require('../controllers/TravelController');
const Travel = require('../models/Travel');

const { dummyTravel, travelID, populateTravel, userId, vehicleID } = require('./testHelper');
//ID for the mock travel
const { ObjectID } = require('mongodb');
const newTravelID = new ObjectID();

beforeEach(populateTravel);

describe('TRAVEL CONTROLLER CRUD TEST', () => {
  it('should create a travel', (done) => {
    const newTravel = new Travel(dummyTravel);
    newTravel._id = newTravelID;
    newTravel.save(function (err, travel) {
      if (err) {
        return { error: "Something went wrong creating a travel" };
      } else {
        return travel;
      }
    }).then((res) => {
      res.should.be.a('object');
      res.should.have.property('distancia');
      res.distancia.should.equal(dummyTravel.distancia);
      done();
    }).catch((err) => done(err));
  });

  it('should find all travels', (done) => {
    TravelController.findAll().then((res) => {
      res.should.be.a('array');
      res[0].should.have.property('tollCost');
      res[0].tollCost.should.equal(dummyTravel.tollCost);
      done();
    }).catch((err) => done(err));
  });


  it('should find a travel by id', (done) => {
    TravelController.find(travelID).then((res) => {
      res.should.be.a('object');
      res.should.have.property('destinoFinal');
      res.destinoFinal.should.equal(dummyTravel.destinoFinal);
      done();
    }).catch((err) => done(err));
  });

  it('should find all travels by User id', (done) => {
    TravelController.findAllByUser(userId).then((res) => {
      res.should.be.a('array');
      res[0].should.have.property('destinoFinal');
      res[0].destinoFinal.should.equal(dummyTravel.destinoFinal);
      done();
    }).catch((err) => done(err));
  });

  it('should find all travels by Vehicle id', (done) => {
    TravelController.findAllByVehicle(vehicleID).then((res) => {
      res.should.be.a('array');
      res[0].should.have.property('destinoFinal');
      res[0].destinoFinal.should.equal(dummyTravel.destinoFinal);
      done();
    }).catch((err) => done(err));
  });

  it('should modify a travel find by a id', (done) => {
    var newName = { destinoFinal: 'Alfredo Ortiz Muñoz' };
    TravelController.edit(travelID, newName).then((res) => {
      res.should.be.a('object');
      res.should.have.property('destinoFinal');
      res.destinoFinal.should.equal(dummyTravel.destinoFinal);
      done();
    }).catch((err) => done(err));
  });

  it('should delete a travel find by a id', (done) => {
    TravelController.delete(travelID).then((res) => {
      res.should.be.a('object');
      res.should.have.property('destinoFinal');
      res.destinoFinal.should.equal(dummyTravel.destinoFinal);
      done();
    }).catch((err) => done(err));
  });
});