const addUser = `
mutation addUser($user: UserInput) {
   addUser(data: $user) {
     _id
   }
}
`;

const addUserVariables = (user) => `
{
   "user": ${user}
}
`;

module.exports = { addUser, addUserVariables };