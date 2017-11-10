const aUser = `
query aUser($id:ID!){
   aUser(id: $id){
     name
     emails
     phones
     percentaje
     type
   }
 }   
`;

const aUserVariable = (id) => `
{
   "id": "${id}"
}
`;

module.exports = { aUser, aUserVariable };