import { cartRepository } from "../repositories/index.js";

const getAll = async (req, res) => {
  try {
    const result = await cartRepository.getAll();
    res.status(200).json({
      message: "Get cart success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Get cart not success",
    });
  }
};

const createCart = async (req, res) => {
  const {
    discountTotal,
    totalProduct,
    totalQuantity,
    totalPrice,
    userId,
    product,
  } = req.body;
  console.log("🚀 ========= product:", product);
  try {
    const result = await cartRepository.createCart({
      discountTotal,
      totalProduct,
      totalQuantity,
      totalPrice,
      userId,
      product,
    });
    res.status(200).json({
      message: "Get cart success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create cart not success",
    });
  }
};

const cartDetail = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= cartId:", id);
  try {
    const result = await cartRepository.cartDetail(id);
    res.status(200).json({
      message: "Get cart success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Get cart not success",
    });
  }
};

const addProduct = async (req, res) => {
  const { productId, cartId, quantity } = req.body;
  console.log(
    "🚀 ========= productId, cartId, quantity:",
    productId,
    cartId,
    quantity
  );
  try {
    const quantityTotal = parseInt(quantity);
    const result = await cartRepository.addProduct({
      productId,
      cartId,
      quantity: quantityTotal,
    });
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(500).json(error.toString());
  }
};
export default {
  getAll,
  createCart,
  cartDetail,
  addProduct,
};
