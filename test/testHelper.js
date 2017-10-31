const {ObjectID} = require('mongodb');
const UserController = require('../controllers/UsersController');
const VehicleController = require('../controllers/VehicleController');

const Users = require('../models/Users');
const Vehicle = require('../models/Vehicle');

let userId = new ObjectID();
let vehicleID = new ObjectID();

const dummyUser = {
    _id: userId,
    name: "Alejandro Ortiz Corro",
    orgnaization: "AO HyS",
    phones: ["2299020825", "2292605547"],
    emails: ["a.ortizcrr@gmail.com", "corrortiz@outlook.com"],
    type: "ADMIN",
    password: "2106",
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

const populateUser = (done) =>{
    Users.remove({})
        .then(() => {
            let user = new Users(dummyUser).save();
            return user;
        }).then(()=>done())
        .catch(err => done(err));
};


const populateVehicle = (done) =>{
    Vehicle.remove({})
        .then(() => {
            let vehicle = new Vehicle(dummyVehicle).save();
            return vehicle;
        }).then(()=>done())
        .catch(err => done(err));
};

module.exports = { 
    userId, 
    dummyUser, 
    populateUser,
    dummyVehicle,
    vehicleID,
    populateVehicle
};