const express = require('express');
const { addToCart, removeFromCart, clearCart, getCart } = require('../services/cartService');
const verifyToken = require('../middleware'); // Adjust the path as necessary
const fetchUser = require('../middleware/fetchUser')

const router = express.Router();

// Add product to cart
router.post('/cart', verifyToken, async (req, res) => {
    const { productId, quantity } = req.body; // Remove userId from body, use req.user
    const userId = req.user.id; // Get userId from decoded token
    try {
        console.log(productId);
        console.log(req.body, ":req");
        const cart = await addToCart(userId, productId, quantity);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Remove product from cart
router.delete('/cart', verifyToken, async (req, res) => {
    const { productId } = req.body; // Remove userId from body, use req.user
    const userId = req.user.id; // Get userId from decoded token
    try {
        const cart = await removeFromCart(userId, productId);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Clear cart
router.delete('/cart/clear', verifyToken, async (req, res) => {
    const userId = req.user.id; // Get userId from decoded token
    try {
        const cart = await clearCart(userId);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//get cart prodcuts
router.get('/cart', fetchUser, async (req, res) => {
    const userId = req.user.id; // Get userId from decoded token
    try {
        const cart = await getCart(userId);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;