import dotenv from "dotenv";
import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsOfCategory,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { authentication } from "../middleware/user.middleware.js";
dotenv.config();
// imageupload
import multer from "multer";
import { storage } from "../../cloudConfig.js";

const upload = multer({ storage });
// imageupload

const productRouter = express.Router();

productRouter.get("/details", getAllProducts);
productRouter.get("/details/category/:categoryId", getAllProductsOfCategory);
productRouter.get("/:id", getProduct);
productRouter.post(
  "/create",
  authentication,

  upload.single("productimage"),
  createProduct
);

productRouter.patch(
  "/:id",
  authentication,
  upload.single("productimage"),
  updateProduct
);
productRouter.delete("/:id", authentication, deleteProduct);

export default productRouter;
