import bcrypt from "bcrypt-nodejs";
import models from "../models";

const createUser = async (_, { params }) => {
  const user = await models.User.create({
    ...params,
    password: bcrypt.hashSync(params.password),
  });

  return user;
};

const usersMutation = {
  createUser,
};

export default usersMutation;
