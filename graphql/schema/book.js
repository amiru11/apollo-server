const type = `
type Book {
  title: String
  author: String
}
`

const query = `
type Query {
  books: [Book]
}
`

export default { type, query }
