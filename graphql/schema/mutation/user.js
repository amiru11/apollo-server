export default `
type Mutation {
  createUser(params: CreateUser): User!
  updateUser(params: UpdateUser): User!
  deleteUser(params: DeleteUser): User!
}
`;
