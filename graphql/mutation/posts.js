/**
 * Sequalize <=> MySql
 */

import models from "../models";

const createPost = async (_, { post }) => {
  try {
    const _post = await models.User.create({ ...post });

    return _post;
  } catch (err) {
    return err;
  }
};

const updatePost = async (_, { post }) => {
  try {
    const { id } = post;
    const _post = await models.Post.findByPk(id);

    await _post.update({ ...post });

    return _post;
  } catch (err) {
    return err;
  }
};

const deletePost = async (_, { id }) => {
  try {
    const post = await models.Post.findByPk(id);
    await post.update({ deleted: true });

    return post;
  } catch (err) {
    return err;
  }
};

export default {
  createPost,
  updatePost,
  deletePost,
};
