import { commentRepository } from "../repositories/index.js";

const createComment = async (req, res) => {
  const { title, body, createdAt, userId, productId } = req.body;
  console.log("🚀 ========= { title, body, createdAt }:", {
    title,
    body,
    createdAt,
    userId,
    productId,
  });
  // const userId = req.userId;
  try {
    const result = commentRepository.createComment({
      title,
      body,
      createdAt,
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
