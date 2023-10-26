import express from "express";
import { cartController } from "../controllers/index.js";
const cartRouter = express.Router();
cartRouter.get("/", cartController.getAll);
cartRouter.post("/", cartController.createCart);
cartRouter.get("/:id", cartController.cartDetail);
cartRouter.put("/", cartController.addProduct);

export default cartRouter;
