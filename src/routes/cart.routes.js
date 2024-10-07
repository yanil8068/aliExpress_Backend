// import express from "express";
// import { authentication } from "../middleware/user.middleware.js";
// import {
//   addToCart,
//   getCart,
//   updateCartItem,
//   removeCartItem,
//   emptyCart,
// } from "../controllers/cart.controller.js";

// const cartRouter = express.Router();

// // Middleware to ensure the user is authenticated
// cartRouter.use(authentication);

// // Routes for cart operations
// cartRouter.post("/add", addToCart);
// cartRouter.get("/", getCart);
// cartRouter.put("/update", updateCartItem);
// cartRouter.delete("/empty", emptyCart);
// cartRouter.delete("/remove", removeCartItem);

// export default cartRouter;

import express from "express";
import { authentication } from "../middleware/user.middleware.js";
import {
  addToCart,
  getCart,
  // updateCartItem,
  removeCartItem,
  emptyCart,
  initializeEmptyCart,
  decrementQuantityOfProdInCart,
} from "../controllers/cart.controller.js";

const cartRouter = express.Router();

// Middleware to ensure the user is authenticated
cartRouter.use(authentication);

// Routes for cart operations
cartRouter.post("/addToCart", addToCart);
cartRouter.post(
  "/decrementQuantityOfProdInCart",
  decrementQuantityOfProdInCart
);
cartRouter.post("/initializeemptycart", initializeEmptyCart);
cartRouter.get("/", getCart);
// cartRouter.put("/update", updateCartItem);
cartRouter.delete("/empty", emptyCart);

cartRouter.delete("/remove/:id", removeCartItem);

export default cartRouter;
