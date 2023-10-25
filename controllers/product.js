import { productReposiroty } from "../repositories/index.js";

const getAll = async (req, res) => {
  try {
    const result = await productReposiroty.getAll();
    res.status(200).json({
      message: "Get product success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
const createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    thumbnail,
  } = req.body;
  console.log(
    "🚀 ========= name,description,price,discountPercentage,stock,brand,thumbnail,:",
    name,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    thumbnail
  );
  const imageId = req.imageId;
  console.log("🚀 ========= imageId:", imageId);
  const commentId = req.commentId;
  console.log("🚀 ========= commentId:", commentId);
  try {
    const result = await productReposiroty.createProduct({
      name,
      description,
      price,
      discountPercentage,
      stock,
      brand,
      thumbnail,
    });
    res.status(201).json({
      message: "Create product success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create product not success",
    });
  }
};

export default {
  getAll,
  createProduct,
};
