const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
   type Query {
      allProjects: [Project]
      aProject(id: ID!): Project 
   }

   type ProjectName{
      es: String
      en: String
   }

   type ProjectDescription{
      es: String
      en: String
   }

   type Project {
      _id: ID!
      url: String
      imageUrl: String
      technologies: [String]
      name: ProjectName
      description: ProjectDescription
   }

   input nameInput{
      es: String
      en: String
   }

   input descriptionInput{
      es: String
      en: String
   }

   input ProjectInput {
      url: String
      imageUrl: String
      technologies: [String]
      name: nameInput
      description: descriptionInput
   }

   type Mutation {
      addProject(data: ProjectInput): Project
      modifyProject(data: ProjectInput, id: ID!): Project
      deleteProject(id: ID!): Project
   }
`;

module.exports = makeExecutableSchema({typeDefs, resolvers});