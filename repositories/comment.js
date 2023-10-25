import Comment from "../models/Comment.js";
import Product from "../models/Product.js";

const createComment = async ({ title, body, createdAt, userId, productId }) => {
  try {
    const result = await Comment.create({
      title,
      body,
      createdAt,
      user: userId,
    });
    await Product.findOneAndUpdate(
      { _id: productId },
      { $push: { comment: result?._id } }, // Thêm commentId vào mảng comments của sản phẩm
      { new: true }
    );
    // const newComment = await result.populate({
    //   path: "user",
    //   select: "username email",
    // });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export default {
  createComment,
};
