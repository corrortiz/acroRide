const chai = require('chai');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;

const BudgetController = require('../controllers/BudgetController');
const Budget = require('../models/Budget');

const { dummyBudget, budgetID, populateBudget} = require('./testHelper');
//ID for the mock budget
const {ObjectID} = require('mongodb');
const newBudgetID = new ObjectID();

beforeEach(populateBudget);

describe('BUDGET CONTROLLER CRUD TEST', () => {
   it('should create a budget', (done) => { 
      const newBudget = new Budget(dummyBudget);
      newBudget._id = newBudgetID;
      newBudget.save(function(err, budget){
         if(err){
            return {error: "Something went wrong creating a budget"};
         }else{
            return budget;
         }
      }).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('distancia');
         res.distancia.should.equal(dummyBudget.distancia);
         done();
      }).catch((err) => done(err));
   });

   it('should find all budgets', (done) => {
      BudgetController.findAll().then((res)=>{
         res.should.be.a('array');
         res[0].should.have.property('tollCost');
         res[0].tollCost.should.equal(dummyBudget.tollCost);
         done();
      }).catch((err) => done(err));
   });

   
   it('should find a budget by id', (done) => {
      BudgetController.find(budgetID).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('aprove');
         res.aprove.should.equal(dummyBudget.aprove);
         done();
      }).catch((err) => done(err));
   });
   
   it('should modify a budget find by a id', (done) => {
      var newName = {destinoFinal: 'Alfredo Ortiz Muñoz'};
      BudgetController.edit(budgetID, newName).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('ok');
         res.ok.should.equal(1);
         done();
      }).catch((err) => done(err));
   });

   it('should delete a budget find by a id', (done) => {
      BudgetController.delete(budgetID).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('result');
         res.result.ok.should.equal(1);
         done();
      }).catch((err) => done(err));
   });
});