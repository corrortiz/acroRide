const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);
//Helpers
const {app} = require('./../server.js');
const {budgetID, populateBudget, userId, vehicleID} = require('./testHelper');

beforeEach(populateBudget);

describe('BUDGET SCHEMA CRUD', () => {
   it('should return array of budgets', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
          query allBudgets{
            allBudgets{
              tolls
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

   it('should return a budget', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
         query aBudget($id:ID!){
            aBudget(id: $id){
              aprove
            }
          }
         `, 'variables': `
            {
               "id": "${budgetID}"
            }
         `})
         .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            done();
         });
   });

   it('should return a array of budgets find by a User ID', (done) => {
    chai.request(app)
       .post('/graphql')
       .send({'query': `
        query aBudgetByUserID($userId:ID!){
          allBudgetsByUser(userId: $userId){
            tolls
            User{
              name
              organization
            }
          }
        }
       `, 'variables': `
          {
             "userId": "${userId}"
          }
       `})
       .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
       });
    });

    it('should return a array of budgets find by a Vehicle ID', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
          query aBudgetByVehilceID($vehicleId:ID!){
            allBudgetsByVehicle(vehicleId: $vehicleId){
              tolls
              Vehicle{
                name
                description {
                  es
                  en
                }
              }
            }
          }
         `, 'variables': `
          {
            "vehicleId": "${vehicleID}"
          }
         `})
         .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            done();
         });
      });

   it('should modify a budget', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({'query': `
        mutation modifyBudget($budget: BudgetInput, $id: ID! ) {
          modifyBudget(data: $budget, id: $id) {
            _id
            tiempoAproximado
            aprove
          }
        }
      `, 'variables': `
         {
            "budget": {
              "aprove": false
            },
            "id": "${budgetID}"
         }
      `})
      .end((err, res) => {
         res.should.have.status(200);
         res.should.be.json;
         res.body.should.be.a('object');
         done();
      });
   });

   it('should create a budget', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({'query': `
          mutation addBudget($budget: BudgetInput) {
            addBudget(data: $budget) {
              _id
              tiempoAproximado
              User{
                name
                organization
              }
              Vehicle{
                name
                type
              }
            }
          }
      `, 'variables': `
          {
            "budget": {
              "finalTotalCost": {
                "es": "100 peso",
                "en": "10 dolars"
              },
              "budgetTotalCost": {
                "es": "80 peso",
                "en": "8 dolars"
              },
              "destinoInicial": "Queretaro",
              "destinoFinal": "Sonora",
              "tiempoAproximado": 2245.5,
              "distancia": 100.565,
              "tolls": [
                "GDL",
                "Marina",
                "Culap",
                "Malageña"
              ],
              "budgetDate": "2017/07/21",
              "aprove": false,
              "User": {
                "_id": "${userId}"
              },
              "Vehicle": {
                "_id": "${vehicleID}"
              }
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

   it('should delete a budget', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({'query': `
        mutation deleteBudget($id: ID! ) {
          deleteBudget(id: $id) {
            _id
            tiempoAproximado
            aprove
          }
        }
      `, 'variables': `
         {
            "id": "${budgetID}"
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