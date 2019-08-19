import models from "../models";

const getPosts = async () => {
  try {
    const posts = await models.Post.findAndCountAll({
      where: { deleted: false },
    });

    return posts;
  } catch (error) {
    return error;
  }
};

const getPostById = async (_, { id }) => {
  try {
    const post = await models.Post.findByPk(id);
    return post;
  } catch (error) {
    return error;
  }
};

export default {
  getPosts,
  getPostById,
};
