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

const getAllProductsOfCategory = async (req, res) => {
  const { categoryId } = req.params; // Assuming the category ID is passed in the URL as a parameter
  try {
    const products = await Product.find({ category: categoryId }).populate({
      path: "category",
      select: "name",
    });

    // Check if any products were not found
    if (products.length === 0) {
      return res.status(404).send({
        message: "No products found for this category",
      });
    }

    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({
      message: "Error in getting products of the category",
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    if (req.user.role != "admin") {
      return res.status(500).send({
        message: "only admin can add products",
      });
    }
    req.body.userId = req.user._id; //66fbc869691387f2b7b2b8bb     req.body.userId = req.user._id;
    const product = await Product.create(req.body);
    if (typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      console.log("url", url);
      console.log("filename", filename);
      product.image = { url, filename };
      await product.save();
    }
    return res
      .status(201)
      .send({ message: "product created successfully", data: product });
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
    if (req.user.role != "admin") {
      return res.status(500).send({
        message: "only admin can add category",
      });
    }
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log("user", req.user);

    if (typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      // console.log("url", url);
      // console.log("filename", filename);
      product.image = { url, filename };
      await product.save();
    }
    //
    return res
      .status(200)
      .send({ message: "Product updated successfully", data: product });
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
    // console.log("user", req.user);
    if (req.user.role != "admin") {
      return res.status(500).send({
        message: "only admin can add category",
      });
    }
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
  getAllProductsOfCategory,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
