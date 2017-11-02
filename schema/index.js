const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
   type Query {
      allUsers: [User]
      aUser(id: ID!): User
      allVehicles: [Vehicle]
      aVehicle(id: ID!): Vehicle 
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

   type VehicleDescription {
      es: String,
      en: String
   }

   type Vehicle{
      _id: ID!
      name: String,
      passengers: Int,
      largeBags: Int,
      smallBags: Int,
      doors: Int,
      type: String,
      status: Boolean,
      imagesUrls: [String],
      description: VehicleDescription
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

   input VehicleDescriptionInput {
      es: String,
      en: String
   }

   input VehicleInput{
      name: String,
      passengers: Int,
      largeBags: Int,
      smallBags: Int,
      doors: Int,
      type: String,
      status: Boolean,
      imagesUrls: [String],
      description: VehicleDescriptionInput
   }

   type Mutation {
      addUser(data: UserInput): User
      modifyUser(data: UserInput, id: ID!): User
      deleteUser(id: ID!): User
      addVehicle(data: VehicleInput): Vehicle
      modifyVehicle(data: VehicleInput, id: ID!): Vehicle
      deleteVehicle(id: ID!): Vehicle
   }
`;

module.exports = makeExecutableSchema({typeDefs, resolvers});