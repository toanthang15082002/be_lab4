import User from "../models/User.js";

const createUser = async ({ username, email, password }) => {
  try {
    const result = await User.create({ username, email, password });
    return result;
  } catch (error) {
    return error.toString();
  }
};

export default {
  createUser,
};
