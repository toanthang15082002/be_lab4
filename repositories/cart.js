import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const getAll = async () => {
  try {
    const result = await Cart.find();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const createCart = async ({
  discountTotal,
  totalProduct,
  totalQuantity,
  totalPrice,
  userId,
}) => {
  try {
    const data = await Product.insertMany([]);
    const result = await Cart.create({
      discountTotal,
      totalProduct,
      totalQuantity,
      totalPrice,
      user: userId,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export default {
  getAll,
  createCart,
};
