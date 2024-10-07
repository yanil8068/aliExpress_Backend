// import mongoose from "mongoose";

// // Schema for individual cart items
// const cartItemSchema = new mongoose.Schema(
//   {
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//     quantity: { type: Number, required: true, default: 1 },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// // Schema for the entire cart
// const cartSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     items: [cartItemSchema],
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// // Mongoose model for the Cart collection
// const Cart = mongoose.model("Cart", cartSchema);

// export default Cart;

import mongoose from "mongoose";

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

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Assuming you have a Product model
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        image: { url: String, filename: String }, //{ type: String, required: false }
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
