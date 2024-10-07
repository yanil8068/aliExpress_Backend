import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

// initialise empty cart for registered user
const initializeEmptyCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id }); //finding  the cart of the current user
    if (!cart) {
      cart = new Cart({ userId: req.user._id, items: [] }); //if cart is not there already then creating a cart for the user
    }
    await cart.save(); //saving in database
    return res
      .status(200)
      .send({ message: "empty cart initialized", cart, success: true });
  } catch (error) {
    return res.status(500).send({
      message: "Error initializing empty cart",
      error: error.message,
      success: false,
    });
  }
};

// Get the user's cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate(
      "items.productId"
    );
    if (!cart) {
      const newCart = new Cart({ userId: req.user._id, items: [] });
      await newCart.save();
      return res.status(200).send({ newCart, success: true });
    }
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({
      message: "Error fetching cart",
      error: error.message,
      success: false,
    });
  }
};

// add to cart
const addToCart = async (req, res) => {
  const { productId, quantity, price, title, image } = req.body; //getting the product id of the product and quantity
  try {
    const cart = await Cart.findOne({ userId: req.user._id }); //searching users cart
    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    const item = cart.items.find(
      //checking if the item already present in the cart
      (item) => item.productId.toString() === productId
    );
    if (item) {
      item.quantity = item.quantity + 1; //if item is already present in the cart then update the quantity of product in the cart
      await cart.save(); //saving in database
      return res
        .status(200)
        .send({ message: "Cart updated successfully", cart, success: true });
    } else {
      // If the item is not found, add it to the cart
      cart.items.push({
        productId,
        quantity,
        price,
        title,
        image,
      });
      // Save the cart
      await cart.save();
      return res
        .status(200)
        .send({ message: "Cart updated successfully", cart, success: true });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Error updating cart",
      error: error.message,
      sucess: false,
    });
  }
};

// Update cart item quantity
const decrementQuantityOfProdInCart = async (req, res) => {
  const { productId } = req.body; //getting the product id of the product and quantity
  try {
    const cart = await Cart.findOne({ userId: req.user._id }); //searching users cart
    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    const item = cart.items.find(
      //checking if the item already present in the cart
      (item) => item.productId.toString() === productId
    );
    if (item) {
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1; //if item is already present in the cart then update the quantity of product in the cart
        await cart.save(); //saving in database
        return res.status(200).send({
          message: "product quantity decresed successfully",
          cart,
          success: true,
        });
      } else {
        cart.items = cart.items.filter(
          (item) => item.productId.toString() !== productId //removing the product from the cart
        );
        await cart.save(); //updating in database
        return res
          .status(200)
          .send({ message: "Item removed from cart", cart, success: true });
      }
    } else {
      return res
        .status(200)
        .send({ message: "product not found in cart ", cart, success: false });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Error updating quantity of product in cart",
      error: error.message,
      sucess: false,
    });
  }
};

// Empty the cart
const emptyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res
        .status(404)
        .send({ message: "Cart not found", success: false });
    }

    // Clear all items from the cart
    cart.items = [];
    await cart.save();

    return res
      .status(200)
      .send({ message: "Cart emptied successfully", cart, success: true });
  } catch (error) {
    return res.status(500).send({
      message: "Error emptying the cart",
      error: error.message,
      success: false,
    });
  }
};

const removeCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({ userId: req.user._id }); //find cart of the current user
    if (!cart) {
      return res
        .status(404)
        .send({ message: "Cart not found", success: false });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== id //removing the product from the cart
    );
    await cart.save(); //updating in database
    return res
      .status(200)
      .send({ message: "Item removed from cart", cart, success: true });
  } catch (error) {
    return res.status(500).send({
      message: "Error removing item from cart",
      error: error.message,
      success: false,
    });
  }
};

export {
  addToCart,
  getCart,
  decrementQuantityOfProdInCart,
  removeCartItem,
  emptyCart,
  initializeEmptyCart,
};
