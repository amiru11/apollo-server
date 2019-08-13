import usersQuery from "./query/users";
import usersMutation from "./mutation/users";

const resolvers = {
  User: {
    __resolveType(user, context, info) {
      return user.isAdmin ? "normalUser" : "adminUser";
    },
  },
  Query: { ...usersQuery },
  Mutation: { ...usersMutation },
};

export default resolvers;
