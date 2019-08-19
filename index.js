import { ApolloServer, gql } from "apollo-server";

import config from "./config";

import type from "./graphql/schema/type";
import query from "./graphql/schema/query";
import _interface from "./graphql/schema/interface";
import input from "./graphql/schema/input";
import mutation from "./graphql/schema/mutation";
import resolvers from "./graphql/resolvers";

import db from "./graphql/db";

db();

const typeDefs = gql`
  ${_interface}
  ${type}
  ${query}
  ${input}
  ${mutation}
`;
const server = new ApolloServer({ typeDefs, resolvers, mocks: false });

server.listen({ port: config.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
