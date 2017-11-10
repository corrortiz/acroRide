const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);
//Helpers
const { app } = require('./../server.js');
const { userId, dummyUser, populateUser } = require('./testHelper');

beforeEach(populateUser);

describe('USERS SCHEMA CRUD', () => {
      it('should return array of users', (done) => {
            chai.request(app)
                  .post('/graphql')
                  .send({
                        'query': `
            query allUsers{
               allUsers{
                  name
                  organization
               }
            }
         `})
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        done();
                  });
      });

      it('should return a user', (done) => {
            chai.request(app)
                  .post('/graphql')
                  .send({
                        'query': `
            query aUser($id:ID!){
               aUser(id: $id){
               name
               emails
               phones
               percentaje
               type
               }
            }
         `, 'variables': `
            {
               "id": "${userId}"
            }
         `})
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        done();
                  });
      });

      it('should modify a user', (done) => {
            chai.request(app)
                  .post('/graphql')
                  .send({
                        'query': `
         mutation modifyUser($user: UserInput, $id: ID!) {
            modifyUser(data: $user, id: $id) {
            name
            organization
            type
            }
         }
      `, 'variables': `
         {
            "user": {
            "type": "ADMIN",
            "name": "FlyNo",
            "organization": "Estranten"
            },
            "id": "${userId}"
         }
      `})
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        done();
                  });
      });

      it('should delete a user', (done) => {
            chai.request(app)
                  .post('/graphql')
                  .send({
                        'query': `
         mutation deleteUser($id: ID!) {
            deleteUser(id: $id) {
            name
            organization
            type
            }
         }
      `, 'variables': `
         {
            "id": "${userId}"
         }
      `})
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        done();
                  });
      });

      it('should create a user', (done) => {
            chai.request(app)
                  .post('/graphql')
                  .send({
                        'query': `
         mutation addUser($user: UserInput) {
            addUser(data: $user) {
            _id
            }
         }
      `, 'variables': `
         {
            "user": {
               "name": "Alejandro Ortiz Corro",
               "organization": "AO HYS -- Alejandro Corro",
               "phones": [
                  "2299020825",
                  "2292605547"
               ],
               "emails": [
                  "a.ortizcrr@gmail.com",
                  "corrortiz@outlook.com"
               ],
               "type": "ADMIN",
               "password": "2106",
               "percentaje": "42"
            }
         }
      `})
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        done();
                  });
      });

});