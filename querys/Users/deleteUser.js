const deleteUser = `
mutation deleteUser($id: ID!) {
   deleteUser(id: $id) {
     name
     organization
     type
   }
 }
 
`;

const deleteUserVariable = (id) => `
{
   "id": "${id}"
}
`;

module.exports = {deleteUser, deleteUserVariable};