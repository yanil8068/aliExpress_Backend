import mongoose from "mongoose";

// Schema for individual cart items
const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true, default: 1 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Schema for the entire cart
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [cartItemSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Mongoose model for the Cart collection
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
