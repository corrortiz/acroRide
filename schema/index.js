const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
   scalar Date

   type Query {
      allUsers: [User]
      aUser(id: ID!): User

      allVehicles: [Vehicle]
      aVehicle(id: ID!): Vehicle
      
      allBudgets: [Budget]
      allBudgetsByUser(userId: ID!): [Budget]
      allBudgetsByVehicle(vehicleId: ID!): [Budget]
      aBudget(id: ID!): Budget
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

   type Vehicle {
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

   type FinalTotalCost {
      es: String,
      en: String   
   }

   type BudgetTotalCost {
      es: String,
      en: String
   }

   type Budget {
      _id: ID!
      finalTotalCost: FinalTotalCost,
      budgetTotalCost: BudgetTotalCost,
      destinoInicial: String,
      destinoFinal: String,
      tiempoAproximado: Float,
      distancia: Float,
      tollCost: Float,
      tolls: [String],
      budgetDate: Date,
      aprove: Boolean,
      User: User,
      Vehicle: Vehicle
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

   input FinalTotalCostInput {
      es: String,
      en: String   
   }

   input BudgetTotalCostInput {
      es: String,
      en: String
   }

   input BudgetInput {
      finalTotalCost: FinalTotalCostInput,
      budgetTotalCost: BudgetTotalCostInput,
      destinoInicial: String,
      destinoFinal: String,
      tiempoAproximado: Float,
      distancia: Float,
      tollCost: Float,
      tolls: [String],
      budgetDate: Date,
      aprove: Boolean,
      User: UserInput,
      Vehicle: VehicleInput
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