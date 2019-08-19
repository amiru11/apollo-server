export default `
input CreatePost {
  title: String!
  content: String!
  UserId: Int!
}

input UpdatePost {
  id: ID!
  title: String!
  content: String!
}

input DeletePost {
  id: ID!
}
`;
