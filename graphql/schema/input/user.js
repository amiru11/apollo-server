export default `
input CreateUser {
  username: String!
  password: String!
  nickname: String
}

input UpdateUser {
  id: ID!
  password: String
  nickname: String
  isAdmin: Boolean
}

input DeleteUser {
  id: ID!
}
`;
