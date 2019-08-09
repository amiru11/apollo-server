const type = `
type User {
  id: Int!
  username: String!
  nickname: String
  isAdmin: Boolean!
  deleted: Boolean!
  createdAt: String
}

type GetUsers {
  count: Int
  rows: [User]
}
`
export default { type }
