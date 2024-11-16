import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = (props) => {
    // Initialize cart with an empty object having expected structure
    const [cart, setCart] = useState({ products: [], totalPrice: 0 });
    const [product, setProduct] = useState([]);

    const getCart = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cart/cart", {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token': localStorage.getItem('token'),
                },
            });
            const json = await response.json();
            setCart(json);
            console.log(json);
        } catch (error) {
            alert("Failed to connect to server.");
        }
    };

    const getProduct = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
            });

            const json = await response.json();
            setProduct(json);
            console.log(json);
        } catch (error) {
            alert("Failed to connect to server.");
        }
    };

    return (
        <CartContext.Provider value={{ product, setProduct, cart, setCart, getCart, getProduct }}>
            {props.children}
        </CartContext.Provider>
    );
};
