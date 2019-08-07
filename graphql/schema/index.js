import { gql } from 'apollo-server'

import book from './book'

const typeDefs = gql`
  ${book.type}
  ${book.query}
`

export default typeDefs
