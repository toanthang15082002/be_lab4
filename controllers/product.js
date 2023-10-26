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
const getDetail = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= id:", id);
  try {
    const result = await productReposiroty.getDetail(id);
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
const getCommentByProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🚀 ========= id:", id);
    const result = await productReposiroty.getCommentByProduct(id);
    console.log("🚀 ========= result:1234", result);
    res.status(200).json({
      message: "Get comment by product success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default {
  getAll,
  createProduct,
  getDetail,
  getCommentByProduct,
};
