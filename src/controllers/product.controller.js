import Product from "../models/product.model.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate({
      path: "category",
      select: "name",
    });

    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({
      message: "Error in getting all Products",
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    req.body.userId = req.user._id;
    const product = await Product.create(req.body);
    return res.status(201).send({ message: "product created successfully" });
  } catch (error) {
    return res.status(500).send({
      message: "Error in creating product",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({
      message: "Error in getting product",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({ message: "Product updated successfully" });
  } catch (error) {
    return res.status(500).send({
      message: "Error in updating Product",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).send({
      message: "Error in deleting Product",
      error: error.message,
    });
  }
};

export {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
