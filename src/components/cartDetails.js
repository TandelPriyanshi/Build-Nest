import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import CartProduct from "./CartProduct";

const CartDetails = () => {
    const { cart, getCart } = useContext(CartContext);

    useEffect(() => {
        getCart();
    }, []);

    if (!cart || !cart.products) {
        return <p>Loading...</p>; // Handle loading state
    }

    return (
        <section className="cart-container">
            <div className="cart-header">
                <h1 className="cart-title">Your Cart</h1>
                <p className="item-count">({cart.products.length})</p>
            </div>

            <div className="cart-items">
                {cart.products.length > 0 ? (
                    cart.products.map((product, index) => (
                        <CartProduct
                            key={product.productId || index} 
                            id={product.productId}           
                            quantity={product.quantity}
                        />
                    ))
                ) : (
                    <p>No products in the cart</p>
                )}
            </div>

            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Subtotal ({cart.products.length} items): <span>{cart.totalPrice}</span></p>
                <p><strong>FREE delivery</strong></p>
                <button className="checkout-btn">Proceed to Checkout</button>
                <a href="/home" className="continue-shopping">Continue shopping for materials</a>
            </div>
        </section>
    );
};

export default CartDetails;
