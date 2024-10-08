import Category from "../models/category.model.js";

// Fetch all categories from the database
const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.status(200).send(category);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting Category", error: error.message });
  }
};

// Fetch a single category by ID
const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    return res.status(200).send(category);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting Category", error: error.message });
  }
};

// Create a new category
const createCategory = async (req, res) => {
  try {
    if (req.user.role != "admin") {
      return res.status(500).send({
        message: "only admin can add category",
      });
    }
    const category = await Category.create(req.body);
    return res
      .status(201)
      .send({ message: "Category created successfully", data: category });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting Category", error: error.message });
  }
};

// Update an existing category by ID
const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.user.role != "admin") {
      return res.status(500).send({
        message: "only admin can add category",
      });
    }
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({ message: "Category updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting Category", error: error.message });
  }
};

// Delete a category by ID
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.user.role != "admin") {
      return res.status(500).send({
        message: "only admin can add category",
      });
    }
    const category = await Category.findByIdAndDelete(id);
    return res.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting Category", error: error.message });
  }
};

export {
  getAllCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
