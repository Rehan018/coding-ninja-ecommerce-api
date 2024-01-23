const Product = require('../models/producs.js');

// Controller to add products
exports.addProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();

    res.status(201).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to list products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to update product quantity by ID
exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;

    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: parseInt(number) } },
      { new: true }
    );

    res.json({ product, message: 'Updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
