const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);

const {userId, createUser, dummyUser} = require('./testHelper');
const UserController = require('../controllers/UsersController');


// beforeEach(createUser);

describe.only('USERS CONTROLLER', () => {
   
   it('should create a user', (done) => {
      UserController.create(dummyUser)
            .then(err=>{
                  done();
            });
      
   });
});
