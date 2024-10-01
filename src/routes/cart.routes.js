// import express from "express";
// import {
//   createCart,
//   deleteCart,
//   getAllCarts,
//   getCart,
//   updateCart,
// } from "../controllers/cart.controller.js";
// import { authentication } from "../middleware/user.middleware.js";

// const cartRouter = express.Router();

// cartRouter.get("/details", getAllCarts);
// cartRouter.get("/:id", getCart);
// cartRouter.post("/create", authentication, createCart);
// cartRouter.patch("/:id", updateCart);
// cartRouter.delete("/:id", deleteCart);

// export default cartRouter;

import express from "express";
import { authentication } from "../middleware/user.middleware.js";
import {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  emptyCart,
} from "../controllers/cart.controller.js";

const cartRouter = express.Router();

// Middleware to ensure the user is authenticated
cartRouter.use(authentication);

// Routes for cart operations
cartRouter.post("/add", addToCart);
cartRouter.get("/", getCart);
cartRouter.put("/update", updateCartItem);
cartRouter.delete("/empty", emptyCart);

cartRouter.delete("/remove", removeCartItem);

export default cartRouter;
