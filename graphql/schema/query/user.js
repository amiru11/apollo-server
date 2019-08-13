export default `
type Query {
  getUsers: GetUsers
  getUserById(id: Int!): normalUser
}`;
