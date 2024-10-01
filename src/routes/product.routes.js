import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { authentication } from "../middleware/user.middleware.js";

const productRouter = express.Router();

productRouter.get("/details", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/create", authentication, createProduct);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
