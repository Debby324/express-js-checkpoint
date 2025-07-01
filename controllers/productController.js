const Product = require('../models/Product');

// @desc    Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// @desc    Get single product
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

// @desc    Create a product
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
};

// @desc    Update a product
exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// @desc    Delete a product
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};
