/**
 * Sequalize <=> MySql
 */

import bcrypt from "bcrypt-nodejs";
import models from "../models";

const createUser = async (_, { params }) => {
  try {
    const { password } = params;
    const user = await models.User.create({
      ...params,
      password: bcrypt.hashSync(password),
    });

    return user;
  } catch (err) {
    return err;
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
    return err;
  }
};

const deleteUser = async (_, { id }) => {
  try {
    const user = await models.User.findByPk(id);
    await user.update({ deleted: true });

    return user;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export default {
  createUser,
  updateUser,
  deleteUser,
};
