const chai = require('chai');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;

const UsersController = require('../controllers/UsersController');
const Users = require('../models/Users');

const {userId, dummyUser, populateUser} = require('./testHelper');
//ID for the mock user
const {ObjectID} = require('mongodb');
const newUserId = new ObjectID();

beforeEach(populateUser);

describe('USER CONTROLLER CRUD TEST', () => {
   it('should create a user', (done) => { 
      const newUser = new Users(dummyUser);
      newUser._id = newUserId;
      newUser.save(function(err, user){
         if(err){
            return {error: "Something went wrong creating a user"};
         }else{
            return user;
         }
      }).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('name');
         res.name.should.equal('Alejandro Ortiz Corro');
         done();
      }).catch((err) => done(err));
   });

   it('should find all users', (done) => {
      UsersController.findAll().then((res)=>{
         res.should.be.a('array');
         res[0].should.have.property('name');
         res[0].name.should.equal('Alejandro Ortiz Corro');
         done();
      }).catch((err) => done(err));
   });

   
   it('should find a user by id', (done) => {
      UsersController.find(userId).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('name');
         res.name.should.equal('Alejandro Ortiz Corro');
         done();
      }).catch((err) => done(err));
   });
   
   it('should modify a user find by a id', (done) => {
      var newName = {name: 'Alfredo Ortiz Muñoz'};
      UsersController.edit(userId, newName).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('ok');
         res.ok.should.equal(1);
         done();
      }).catch((err) => done(err));
   });

   it('should delete a user find by a id', (done) => {
      UsersController.delete(userId).then((res)=>{
         res.should.be.a('object');
         res.should.have.property('result');
         res.result.ok.should.equal(1);
         done();
      }).catch((err) => done(err));
   });
});