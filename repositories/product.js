import Product from "../models/Product.js";

const getAll = async () => {
  try {
    const result = await Product.find().populate("comment");
    return result;
  } catch (error) {
    return error.toString();
  }
};

const createProduct = async ({
  name,
  description,
  price,
  discountPercentage,
  stock,
  brand,
  thumbnail,
}) => {
  try {
    const result = await Product.create({
      name,
      description,
      price,
      discountPercentage,
      stock,
      brand,
      thumbnail,
    });
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getDetail = async (id) => {
  try {
    const result = await Product.findOne({ _id: id }).populate("comment");
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getCommentByProduct = async (id) => {
  try {
    const result = await Product.findOne({ _id: id }).populate("comment");
    return result.comment;
  } catch (error) {
    return error.toString();
  }
};
export default {
  getAll,
  createProduct,
  getDetail,
  getCommentByProduct,
};
