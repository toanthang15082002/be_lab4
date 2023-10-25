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
  const { discountTotal, totalProduct, totalQuantity, totalPrice, userId } = req.body;
  try {
    const result = await cartRepository.createCart({
      discountTotal,
      totalProduct,
      totalQuantity,
      totalPrice,
      userId
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

export default {
  getAll,
  createCart,
};
