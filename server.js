import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/database.js";
import {
  cartRouter,
  commentRouter,
  productRouter,
  userRouter,
} from "./routes/index.js";

const app = express();
app.use(express.json());
var corsOptions = {
  origin: "localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/products/:id", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});
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
