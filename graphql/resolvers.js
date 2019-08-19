import usersQuery from "./query/users";
import usersMutation from "./mutation/users";

import postsQuery from "./query/posts";
import postsMutation from "./mutation/posts";

const resolvers = {
  User: {
    __resolveType(user, context, info) {
      return user.isAdmin ? "adminUser" : "normalUser";
    },
  },
  Query: { ...usersQuery, ...postsQuery },
  Mutation: { ...usersMutation, ...postsMutation },
};

export default resolvers;
