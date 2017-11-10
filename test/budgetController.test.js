const chai = require('chai');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;

const BudgetController = require('../controllers/BudgetController');
const Budget = require('../models/Budget');

const { dummyBudget, budgetID, populateBudget, userId, vehicleID, variablesID } = require('./testHelper');
//ID for the mock budget
const { ObjectID } = require('mongodb');
const newBudgetID = new ObjectID();

beforeEach(populateBudget);

describe('BUDGET CONTROLLER CRUD TEST', () => {
  it('should create a budget', (done) => {
    const newBudget = new Budget(dummyBudget);
    newBudget._id = newBudgetID;
    newBudget.save(function (err, budget) {
      if (err) {
        return { error: "Something went wrong creating a budget" };
      } else {
        return budget;
      }
    }).then((res) => {
      res.should.be.a('object');
      res.should.have.property('distancia');
      res.distancia.should.equal(dummyBudget.distancia);
      done();
    }).catch((err) => done(err));
  });

  it('should find all budgets', (done) => {
    BudgetController.findAll().then((res) => {
      res.should.be.a('array');
      res[0].should.have.property('distancia');
      res[0].distancia.should.equal(dummyBudget.distancia);
      done();
    }).catch((err) => done(err));
  });


  it('should find a budget by id', (done) => {
    BudgetController.find(budgetID).then((res) => {
      res.should.be.a('object');
      res.should.have.property('aprove');
      res.aprove.should.equal(dummyBudget.aprove);
      done();
    }).catch((err) => done(err));
  });

  it('should find all budgets by User id', (done) => {
    BudgetController.findAllByUser(userId).then((res) => {
      res.should.be.a('array');
      res[0].should.have.property('aprove');
      res[0].aprove.should.equal(dummyBudget.aprove);
      done();
    }).catch((err) => done(err));
  });

  it('should find all budgets by Vehicle id', (done) => {
    BudgetController.findAllByVehicle(vehicleID).then((res) => {
      res.should.be.a('array');
      res[0].should.have.property('aprove');
      res[0].aprove.should.equal(dummyBudget.aprove);
      done();
    }).catch((err) => done(err));
  });

  it('should modify a budget find by a id', (done) => {
    var newVers = {
      destinoFinal: 'Cancun',
      Variables: {
        _id: variablesID,
        salary: 489
      }
    };
    BudgetController.edit(budgetID, newVers).then((res) => {
      res.should.be.a('object');
      res.should.have.property('destinoFinal');
      res.destinoFinal.should.equal(dummyBudget.destinoFinal);
      done();
    }).catch((err) => done(err));
  });

  it('should delete a budget find by a id', (done) => {
    BudgetController.delete(budgetID).then((res) => {
      res.should.be.a('object');
      res.should.have.property('aprove');
      res.aprove.should.equal(dummyBudget.aprove);
      done();
    }).catch((err) => done(err));
  });
});