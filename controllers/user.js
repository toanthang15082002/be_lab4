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

export default {
  createUser,
};
