const {ObjectID} = require('mongodb');
const UserController = require('../controllers/UsersController');

const Users = require('../models/Users');

let userId = new ObjectID();

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

const populateUser = (done) =>{
    Users.remove({})
        .then(() => {
            let user = new Users(dummyUser).save();
            return user;
        }).then(()=>done())
        .catch(err => done(err));
};

module.exports = { userId, dummyUser, populateUser};