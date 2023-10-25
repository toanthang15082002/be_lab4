import express from "express";
import * as dotenv from "dotenv";
import {
  cartRouter,
  commentRouter,
  productRouter,
  userRouter,
} from "./routes/index.js";
import connectDB from "./database/database.js";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/comments", commentRouter);
//Load .env file: config file
dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  await connectDB();
});
