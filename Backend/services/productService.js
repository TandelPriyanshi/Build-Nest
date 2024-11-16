const Product = require('../models/Product');

// Create a new product
const createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
};

// Get all products
const getAllProducts = async () => {
    return await Product.find();
};

// Get product by ID
const getProductById = async (productId) => {
    return await Product.findById(productId);
};

// Update product by ID
const updateProductById = async (productId, productData) => {
    return await Product.findByIdAndUpdate(productId, productData, {
        new: true,
        runValidators: true,
    });
};

// Delete product by ID
const deleteProductById = async (productId) => {
    return await Product.findByIdAndDelete(productId);
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
