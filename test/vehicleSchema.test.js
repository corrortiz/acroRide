const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);
//Helpers
const { app } = require('./../server.js');
const { vehicleID, populateVehicle } = require('./testHelper');

beforeEach(populateVehicle);

describe('VEHICLE SCHEMA CRUD', () => {
  it('should return array of vehicles', (done) => {
    chai.request(app)
      .post('/graphql')
      .send({
        'query': `
         {
            allVehicles {
              name
              doors
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

  it('should return a vehicle', (done) => {
    chai.request(app)
      .post('/graphql')
      .send({
        'query': `
         query aVehicle($id: ID!) {
            aVehicle(id: $id) {
              doors
              passengers
              largeBags
            }
          }
         `, 'variables': `
            {
               "id": "${vehicleID}"
            }
         `})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should modify a vehicle', (done) => {
    chai.request(app)
      .post('/graphql')
      .send({
        'query': `
      mutation modifyVehicle($vehicle: VehicleInput, $id: ID!) {
            modifyVehicle(data: $vehicle, id: $id) {
              name
              smallBags
              imagesUrls
            }
          }
      `, 'variables': `
         {
            "vehicle":{
                  "name": "Camioneta 44",
                  "smallBags": 22,
                  "imagesUrls": ["image.url", "doom", "golemas.com"]
            },
            "id": "${vehicleID}"
         }
      `})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a vehicle', (done) => {
    chai.request(app)
      .post('/graphql')
      .send({
        'query': `
      mutation deleteVehicle($id: ID!) {
            deleteVehicle(id: $id) {
              name
              doors
            }
          }
      `, 'variables': `
         {
            "id": "${vehicleID}"
         }
      `})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });

  it('should create a vehicle', (done) => {
    chai.request(app)
      .post('/graphql')
      .send({
        'query': `
      mutation addVehicle($vehicle: VehicleInput) {
            addVehicle(data: $vehicle) {
              _id
              name
              passengers
              description{
                es
                en
              }
            }
          }
      `, 'variables': `
      {
            "vehicle": {
              "name": "Suburban 4",
              "passengers": 4,
              "largeBags": 2,
              "smallBags": 4,
              "doors": 4,
              "type": "Suburbam",
              "status": true,
              "imagesUrls": ["http://lorempixel.com/output/transport-q-c-640-480-4.jpg", "http://lorempixel.com/output/transport-q-c-640-480-6.jpg"],
              "description": {
                  "es": "Camioneta 44 muy bonita",
                  "en": "44 Truck very pretty "
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

});