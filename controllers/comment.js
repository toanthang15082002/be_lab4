import { commentRepository } from "../repositories/index.js";

const createComment = async (req, res) => {
  const { title, body, userId, productId } = req.body;
  const date = new Date();
  try {
    const result = commentRepository.createComment({
      title,
      body,
      createdAt: date,
      userId,
      productId,
    });
    return res.status(201).json({
      message: "Create comment success",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: res.toString(),
    });
  }
};

export default {
  createComment,
};
