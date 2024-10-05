import mongoose from "mongoose";

// Schema for the Category collection
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Mongoose model for the Category collection
const Category = mongoose.model("Category", categorySchema);

export default Category;
