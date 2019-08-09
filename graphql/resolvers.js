import usersQuery from './query/users'

const resolvers = {
  Query: { ...usersQuery }
}

export default resolvers
