import mongoose, { Mongoose, ObjectId, Schema } from "mongoose";
import Image from "./Image.js";
const Product = mongoose.model(
  "Product",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    price: {
      type: Number,
      require: false,
    },
    discountPercentage: {
      type: Number,
      require: false,
    },
    stock: {
      type: String,
      require: false,
    },
    brand: {
      type: String,
      require: false,
    },
    thumbnail: {
      type: String,
    },
    images: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: Image, // Tham chiếu đến model Image
        },
        url: {
          type: String,
        },
        caption: {
          type: String,
        },
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  })
);
export default Product;
