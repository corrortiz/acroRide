const modifyUser = `
mutation modifyUser($user: UserInput, $id: ID!) {
   modifyUser(data: $user, id: $id) {
     name
     organization
     type
   }
 }
`;

const modifyUserVariables = (id) => `
{
   "user": {
     "type": "ADMIN",
     "name": "FlyNo",
     "organization": "Estranten"
   },
   "id": "${id}"
 }
`;

module.exports = {modifyUserVariables, modifyUser};