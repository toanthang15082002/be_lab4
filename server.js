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
app.use(
  cors({
    origin: ["http://localhost:3000"], // Replace with the origin of your frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (if needed)
  })
);
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
