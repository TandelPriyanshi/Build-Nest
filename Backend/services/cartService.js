const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add a product to the cart
const addToCart = async (userId, productId, quantity) => {
    try {
        console.log(productId, ":: productid");
        // Find the product
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        // Find the user's cart or create a new one
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, products: [], totalPrice: 0 });
        }

        // Check if the product is already in the cart
        const productInCart = cart.products.find(p => p.productId.toString() === productId);
        if (productInCart) {
            // Update the quantity if the product is already in the cart
            productInCart.quantity += quantity;
        } else {
            // Add the product to the cart
            cart.products.push({ productId, quantity });
        }

        // Recalculate the total price
        cart.totalPrice += product.price * quantity;

        // Save the cart
        await cart.save();

        return cart;
    } catch (err) {
        console.log(err, "::error")
        throw new Error("Error adding to cart: ${err.message}");
    }
};

// Remove a product from the cart
const removeFromCart = async (userId, productId) => {
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            throw new Error('Cart not found');
        }

        // Find the product in the cart
        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex === -1) {
            throw new Error('Product not found in cart');
        }

        // Update total price
        const productInCart = cart.products[productIndex];
        cart.totalPrice -= productInCart.quantity * (await Product.findById(productId)).price;

        // Remove the product from the cart
        cart.products.splice(productIndex, 1);

        // Save the cart
        await cart.save();

        return cart;
    } catch (err) {
        throw new Error("Error removing from cart: ${err.message}");
    }
};

// Clear the entire cart
const clearCart = async (userId) => {
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            throw new Error('Cart not found');
        }

        cart.products = [];
        cart.totalPrice = 0;

        await cart.save();

        return cart;
    } catch (err) {
        throw new Error("Error clearing cart: ${err.message}");
    }
};


// Clear the entire cart
const getCart = async (userId) => {
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            throw new Error('Cart not found');
        }
        
        return cart;
    } catch (err) {
        throw new Error("Error clearing cart: ${err.message}");
    }
};

module.exports = { addToCart, removeFromCart, clearCart, getCart };