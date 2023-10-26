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

const login = async ({ email, password }) => {
  try {
    const result = await User.findOne({ email, password });
    if (!result) {
      throw new Error("Tai khoan mat khau khum dung");
    }
    return result;
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default {
  createUser,
  getAllUser,
  login,
};
