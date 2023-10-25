import mongoose, { ObjectId, Schema } from "mongoose";
const Image = mongoose.model(
  "Image",
  new Schema({
    id: ObjectId,
    url: {
      type: String,
      require: true,
    },
    caption: {
      type: String,
      require: false,
    },
    createAt: {
      type: Date,
      require: false,
    },
    path: {
      type: Number,
      require: false,
    },
  })
);
export default Image;
