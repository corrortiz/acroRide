const UsersController = require('./../controllers/UsersController');
const VehicleController = require('./../controllers/VehicleController');
const BudgetController = require('./../controllers/BudgetController');
const TravelController = require('./../controllers/TravelController');

module.exports = {
  Query: {
    allUsers: (_, args, { user }) => {
      return UsersController.findAll();
    },
    aUser: (_, { id }) => {
      return UsersController.find(id);
    },
    auhtUser: (_, { id, password }) => {
      return UsersController.auhtUser(id, password);
    },

    allVehicles: () => {
      return VehicleController.findAll();
    },
    aVehicle: (_, { id }) => {
      return VehicleController.find(id);
    },

    allBudgets: () => {
      return BudgetController.findAll();
    },
    allBudgetsByUser: (_, { userId }, {dataloaders: {budgetLoader}}) => {
      return budgetLoader.load(userId);
    },
    allBudgetsByVehicle: (_, { vehicleId }) => {
      return BudgetController.findAllByVehicle(vehicleId);
    },
    aBudget: (_, { id }) => {
      return BudgetController.find(id);
    },

    allTravels: () => {
      return TravelController.findAll();
    },
    allTravelsByUser: (_, { userId }) => {
      return TravelController.findAllByUser(userId);
    },
    allTravelsByVehicle: (_, { vehicleId }) => {
      return TravelController.findAllByVehicle(vehicleId);
    },
    aTravel: (_, { id }) => {
      return TravelController.find(id);
    },
  },
  Mutation: {
    addUser: (_, { data }) => {
      return UsersController.create(data);
    },
    deleteUser: (_, { id }) => {
      return UsersController.delete(id);
    },
    modifyUser: (_, { data, id }) => {
      return UsersController.edit(id, data);
    },
    login: (_, { id, password }) => {
      return UsersController.login(id, password);
    },

    addVehicle: (_, { data }) => {
      return VehicleController.create(data);
    },
    deleteVehicle: (_, { id }) => {
      return VehicleController.delete(id);
    },
    modifyVehicle: (_, { data, id }) => {
      return VehicleController.edit(id, data);
    },

    addBudget: (_, { data }) => {
      return BudgetController.create(data);
    },
    deleteBudget: (_, { id }) => {
      return BudgetController.delete(id);
    },
    modifyBudget: (_, { data, id }) => {
      return BudgetController.edit(id, data);
    },

    addTravel: (_, { data }) => {
      return TravelController.create(data);
    },
    deleteTravel: (_, { id }) => {
      return TravelController.delete(id);
    },
    modifyTravel: (_, { data, id }) => {
      return TravelController.edit(id, data);
    },
  },
  //This code saves the scalar type os Date found in this thred
  //https://github.com/graphql/graphql-js/issues/497
  //Convers mongo Date to GraphQL timeStamp
  Date: {
    __parseValue(value) {
      return new Date(value); // value from the client
    },
    __serialize(value) {
      return value.getTime(); // value sent to the client
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  },
};