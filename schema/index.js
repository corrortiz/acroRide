const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
   type Query {
      allUsers: [User]
      aUser(id: ID!): User 
   }

   type User {
      _id: ID!
      name: String,
      organization: String,
      phones: [String],
      emails: [String],
      type: String,
      password: String,
      percentaje: String
   }

   input UserInput {
      name: String,
      organization: String,
      phones: [String],
      emails: [String],
      type: String,
      password: String,
      percentaje: String
   }

   type Mutation {
      addUser(data: UserInput): User
      modifyUser(data: UserInput, id: ID!): User
      deleteUser(id: ID!): User
   }
`;

module.exports = makeExecutableSchema({typeDefs, resolvers});