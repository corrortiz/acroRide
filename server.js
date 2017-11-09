require('./config/config');
//Express
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

//Mongose CONFIG
const {mongoose} = require('./db/mongoose');
//GraphQL
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./schema');
const app = express();
const port = process.env.PORT;

//AutUser
const addUser = (req) =>{
    const token = req.headers.authorization;
    try{
        jwt.verify(token, process.env.SECRET, function(err, user){
            req.user = user;
        });
    }catch(err){
        console.warn(err);
    }
    req.next();
};

app.use(addUser);

app.use(
    '/graphql', 
    bodyParser.json(), 
    graphqlExpress(req => ({
        schema,
        context:{
            user: req.user,
        }
    }))
);

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
  
module.exports = { app };