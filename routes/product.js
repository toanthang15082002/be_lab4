import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();

productRouter.get("/", productController.getAll);
productRouter.post("/", productController.createProduct);
export default productRouter;
