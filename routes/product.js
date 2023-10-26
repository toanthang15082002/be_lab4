import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();

productRouter.get("/", productController.getAll);
productRouter.post("/", productController.createProduct);
productRouter.get("/:id", productController.getDetail);
productRouter.get("/:id/comments", productController.getCommentByProduct);
export default productRouter;
