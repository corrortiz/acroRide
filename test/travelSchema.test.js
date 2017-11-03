const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);
//Helpers
const {app} = require('./../server.js');
const {travelID, populateTravel, userId, vehicleID} = require('./testHelper');

beforeEach(populateTravel);

describe('TRAVEL SCHEMA CRUD', () => {
   it('should return array of travels', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
          query allTravels{
            allTravels{
              tolls
              distancia
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

   it('should return a travel', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
          query aTravel($id:ID!){
            aTravel(id: $id){
              tolls
              distancia
            }
          }
         `, 'variables': `
            {
               "id": "${travelID}"
            }
         `})
         .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            done();
         });
   });

   it('should return a array of travels find by a User ID', (done) => {
    chai.request(app)
       .post('/graphql')
       .send({'query': `
        query allTravelsByUser($userId:ID!){
          allTravelsByUser(userId: $userId){
            tolls
            distancia
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

    it('should return a array of travels find by a Vehicle ID', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
          query allTravelsByVehicle($vehicleId:ID!){
            allTravelsByVehicle(vehicleId: $vehicleId){
              tolls
              distancia
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

   it('should modify a travel', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({'query': `
        mutation modifyTravel($travel: TravelInput, $id:ID!) {
          modifyTravel(data: $travel, id: $id) {
            tiempoAproximado
            tollCost
          }
        }
      `, 'variables': `
         {
            "travel": {
              "tiempoAproximado": 150.45,
              "tollCost": 55.26
            },
            "id": "${travelID}"
         }
      `})
      .end((err, res) => {
         res.should.have.status(200);
         res.should.be.json;
         res.body.should.be.a('object');
         done();
      });
   });

   it('should create a travel', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({'query': `
        mutation addTravel($travel: TravelInput) {
          addTravel(data: $travel) {
            _id
            tiempoAproximado
          }
        }
      `, 'variables': `
          { 
            "travel": {
              "finalTotalCost": {
                "es": "200 peso",
                "en": "20 dolars"
              },
              "budgetTotalCost": {
                "es": "900 peso",
                "en": "60 dolars"
              },
              "destinoInicial": "Queretaro",
              "destinoFinal": "Sonora",
              "tiempoAproximado": 2245.5,
              "distancia": 100.565,
              "tollCost": 2220.5,
              "tolls": [
                "GDL",
                "Marina",
                "Culap",
                "Malageña"
              ],
              "actualDate": "2017/07/21",
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

   it('should delete a travel', (done) => {
      chai.request(app)
      .post('/graphql')
      .send({'query': `
        mutation deleteTravel($id:ID!) {
          deleteTravel(id: $id) {
            tiempoAproximado
            tollCost
          }
        }
      `, 'variables': `
         {
            "id": "${travelID}"
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