import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controllers/category.controller.js";
import { authentication } from "../middleware/user.middleware.js";

const categoryRouter = express.Router();

//routes for category
categoryRouter.get("/details", getAllCategory);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/create", authentication, createCategory);
categoryRouter.patch("/:id", authentication, updateCategory);
categoryRouter.delete("/:id", authentication, deleteCategory);

export default categoryRouter;
