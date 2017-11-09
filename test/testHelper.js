const { ObjectID } = require('mongodb');
const moment = require('moment');
const UserController = require('../controllers/UsersController');
const VehicleController = require('../controllers/VehicleController');
const BudgetController = require('../controllers/BudgetController');
const TravelController = require('../controllers/TravelController');

const Users = require('../models/Users');
const Vehicle = require('../models/Vehicle');
const Budget = require('../models/Budget');
const Travel = require('../models/Travel');
const Variables = require('../models/Variables');

let userId = new ObjectID();
let vehicleID = new ObjectID();
let budgetID = new ObjectID();
let travelID = new ObjectID();
let variablesID = new ObjectID();

const dummyUser = {
    _id: userId,
    name: "Alejandro Ortiz Corro",
    orgnaization: "AO HyS es lo mejor",
    phones: ["2299020825", "2292605547"],
    emails: ["a.ortizcrr@gmail.com", "corrortiz@outlook.com"],
    type: "ADMIN",
    password: "calixio2106",
    percentaje: "100"
};

const dummyVehicle = {
    _id: vehicleID,
    name: "Suburban 4",
    passengers: 4,
    largeBags: 2,
    smallBags: 4,
    doors: 4,
    type: "Suburbam",
    status: true,
    imagesUrls: ["http://lorempixel.com/output/transport-q-c-640-480-4.jpg", "http://lorempixel.com/output/transport-q-c-640-480-6.jpg"],
    description: {
        es: "Camioneta 44 muy bonita",
        en: "44 Truck very pretty "
    }
};

const dummyVariables = {
    _id: vehicleID,
    viatics: 10,
    foods: 20,
    salary: 30,
    hotel: 40,
    gas: 50,
    floorRight: 60,
    tollCost: 70,
    guide: 80,
    lunchBox: 90
};

const dummyBudget = {
    _id: budgetID,
    finalTotalCost: {
        es: "200 Pesos",
        en: "20 Dolars"
    },
    budgetTotalCost: {
        es: "150 Pesos",
        en: "10 Dolars"
    },
    destinoInicial: "Veracruz",
    destinoFinal: "Puebla",
    tiempoAproximado: 250,
    distancia: 150,
    tolls: ["minantla", "puebla"],
    budgetDate: moment().format(),
    aprove: true,
    User: dummyUser,
    Vehicle: dummyVehicle,
    Variables: dummyVariables
};

const dummyTravel = {
    _id: travelID,
    finalTotalCost: {
        es: "200 Pesos",
        en: "20 Dolars"
    },
    budgetTotalCost: {
        es: "150 Pesos",
        en: "10 Dolars"
    },
    destinoInicial: "Veracruz",
    destinoFinal: "Puebla",
    tiempoAproximado: 250,
    distancia: 150,
    tollCost: 100.00,
    tolls: ["minantla", "puebla"],
    budgetDate: moment().format(),
    User: dummyUser,
    Vehicle: dummyVehicle
};

const populateUser = (done) => {
    Users.remove({})
        .then(() => {
            let user = new Users(dummyUser).save();
            return user;
        }).then(() => done())
        .catch(err => done(err));
};


const populateVehicle = (done) => {
    Vehicle.remove({})
        .then(() => {
            let vehicle = new Vehicle(dummyVehicle).save();
            return vehicle;
        }).then(() => done())
        .catch(err => done(err));
};


const populateBudget = (done) => {
    Budget.remove({})
        .then(() => {
            let budget = new Budget(dummyBudget).save();
            return budget;
        }).then(() => done())
        .catch(err => done(err));
};

const populateTravel = (done) => {
    Travel.remove({})
        .then(() => {
            let travel = new Travel(dummyTravel).save();
            return travel;
        }).then(() => done())
        .catch(err => done(err));
};

module.exports = {
    userId,
    dummyUser,
    populateUser,
    dummyVehicle,
    vehicleID,
    populateVehicle,
    dummyBudget,
    budgetID,
    populateBudget,
    dummyTravel,
    travelID,
    populateTravel,
    variablesID
};