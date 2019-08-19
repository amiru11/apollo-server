import bcrypt from "bcrypt-nodejs";
import models from "../models";

const createUser = async (_, { params }) => {
  try {
    console.log("user", params);
    const { password } = params;
    const user = await models.User.create({
      ...params,
      password: bcrypt.hashSync(password),
    });

    return user;
  } catch (err) {
    console.log("err", err);
  }
};

const updateUser = async (_, { params }) => {
  try {
    const { password } = params;
    const user = await models.User.findByPk(params.id);
    await user.update({
      ...params,
      password: password ? bcrypt.hashSync(password) : user.password,
    });

    return user;
  } catch (err) {
    console.log("err", err);
  }
};

const deleteUser = async (_, { params }) => {
  try {
    const user = await models.User.findByPk(params.id);
    await user.update({
      deleted: !user.deleted,
    });

    return user;
  } catch (err) {
    console.log("err", err);
  }
};

const usersMutation = {
  createUser,
  updateUser,
  deleteUser,
};

export default usersMutation;
