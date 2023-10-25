import User from "../models/User.js";

const createUser = async ({ username, email, password }) => {
  try {
    const result = await User.create({ username, email, password });
    return result;
  } catch (error) {
    return error.toString();
  }
};
const getAllUser = async (username, email, password) => {
  try {
    const result = await User.find();
    return result;
  } catch (error) {
    return error.toString();
  }
};
export default {
  createUser,
  getAllUser,
};
