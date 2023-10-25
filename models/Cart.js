import mongoose, { ObjectId, Schema } from "mongoose";
const Cart = mongoose.model(
  "Cart",
  new Schema({
    id: ObjectId,
    discountTotal: {
      type: Number,
      require: true,
    },
    totalProduct: {
      type: Number,
      require: false,
    },
    totalQuantity: {
      type: Number,
      require: false,
    },
    totalPrice: {
      type: Number,
      require: false,
    },
    product: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: false,
        },
        quantity: {
          type: Number,
          required: false,
        },
        discountPercentage: {
          type: Number,
        },
        total: {
          type: Number,
          required: false,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);
export default Cart;
