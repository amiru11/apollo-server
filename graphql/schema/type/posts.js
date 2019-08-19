const type = `
type Post {
  id: Int!
  title: String!
  content: String!
  deleted: Boolean!
  createdAt: String
  updatedAt: String
  UserId: Int!
}

type GetPosts {
  count: Int!
  rows: [Post]
}
`;

export default { type };
