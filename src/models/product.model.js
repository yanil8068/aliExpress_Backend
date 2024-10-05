import mongoose from "mongoose";

// Schema for product details
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    description: { type: String, required: false },
    image: { url: String, filename: String }, //{ type: String, required: false }
    quantity: { type: Number, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Mongoose model for the Product collection
const Product = mongoose.model("Product", productSchema);

export default Product;
