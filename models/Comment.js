import mongoose, { ObjectId, Schema } from "mongoose";

const Comment = mongoose.model(
  "Comment",
  new Schema({
    id: ObjectId,
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: false,
    },
    createdAt: { 
      type: Date,
      require: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);
export default Comment;
