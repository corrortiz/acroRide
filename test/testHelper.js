const {ObjectID} = require('mongodb');
const UserController = require('../controllers/UsersController');

let userId = new ObjectID();

const dummyUser = {
    _id: userId,
    name: "Alejandro Ortiz Corro",
    orgnaization: "AO HyS",
    phones: ["2299020825", "2292605547"],
    emails: ["a.ortizcrr@gmail.com", "corrortiz@outlook.com"],
    type: "ADMIN",
    password: "2106",
    percentaje: 100
};

const createUser = (done) =>{
    UserController.create(dummyUser)
        .then(()=>done())
        .catch(err => console.warn(err));
};


module.exports = { userId, dummyUser, createUser };