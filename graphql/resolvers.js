import { books } from './db'

const resolvers = {
  Query: {
    books: () => books
  }
}

export default resolvers
