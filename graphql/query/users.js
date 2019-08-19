import models from "../models";

const getUsers = async () => {
  const users = await models.User.findAndCountAll({
    where: {
      deleted: false,
    },
  });
  return users;
};
const getUserById = async (_, { id }) => {
  const user = await models.User.findByPk(id);
  return user;
};

const usersQuery = {
  getUsers,
  getUserById,
};

export default usersQuery;
