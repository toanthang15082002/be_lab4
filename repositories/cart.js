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
  product,
}) => {
  try {
    const result = await Cart.create({
      discountTotal: discountTotal || 0,
      totalProduct: totalProduct || 0,
      totalQuantity: totalQuantity || 0,
      totalPrice: totalPrice || 0,
      user: userId,
      product,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const cartDetail = async (cartId) => {
  try {
    const result = Cart.findOne({ _id: cartId });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const addProduct = async ({ cartId, productId, quantity }) => {
  try {
    const cart = await Cart.findById(cartId);
    const product = await Product.findById(productId);
    if (!product) {
      return "Product you add that is not existed";
    }
    if (product.stock < quantity) {
      return `Product don't have enough ${quantity} product. Current stock now: ${product.stock}`;
    }
    if (!cart) {
      return "Cart is not existed";
    }
    let existedProduct = cart.product.find(
      (cProduct) => cProduct._id.toString() === productId
    );

    let totalQuantity = quantity;
    let discountTotal =
      (product.discountPercentage * totalQuantity * product.price) / 100;
    let totalProduct = product.price * totalQuantity;
    let totalPrice =
      (product.price * totalQuantity * (100 - product.discountPercentage)) /
      100;
    if (existedProduct) {
      existedProduct.quantity += totalQuantity;
      existedProduct.total += totalPrice;
    } else {
      cart.product.push({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity,
        discountPercentage: product.discountPercentage,
        total: totalPrice,
      });
    }
    cart.discountTotal += discountTotal;
    cart.totalProduct += totalProduct;
    cart.totalQuantity += totalQuantity;
    cart.totalPrice += totalPrice;
    product.stock -= totalQuantity;
    await cart.save();
    await product.save();
    return "Successfully!";
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default {
  getAll,
  createCart,
  cartDetail,
  addProduct,
};
