import { userRepository } from "../repositories/index.js";

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await userRepository.createUser({
      username,
      email,
      password,
    });
    res.status(201).json({
      message: "Create user success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create is not successful",
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await userRepository.getAllUser();
    res.status(200).json({
      message: "Get user success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Get is not successful",
    });
  }
};

const login = async (req, res) => {
  const { username, email, password } = res.body;
  try {
    const result = await userRepository.login({ username, email, password });
    res.status(201).json({
      message: "Login success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default {
  createUser,
  getAllUser,
  login,
};
