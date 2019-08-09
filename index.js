import { ApolloServer, gql } from 'apollo-server'

import config from './config'

import type from './graphql/schema/type'
import query from './graphql/schema/query'
import resolvers from './graphql/resolvers'

import db from './graphql/db'

db()

const typeDefs = gql`
  ${type}
  ${query}
`
const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: config.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
