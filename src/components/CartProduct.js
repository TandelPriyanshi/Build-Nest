import React, { useContext, useEffect } from "react";
import { CartContext } from '../Context/CartContext';

const CartProduct = (props) => {
    const { product, getProduct } = useContext(CartContext);
    useEffect(() => {
        getProduct(props.id);
    }, []);
    return (
        <div key={props.key} class="cart-item">
            <img src={product.img} height="100%" width='100px' alt="Photo"/>
            <div class="product-details">
                <h2>{product.name}</h2>
                <p className="quantity-c">{props.quantity}</p>
            </div>
            <div class="product-price">
                <p class="current-price">{product.price}</p>
            </div>
        </div>
    )
}

export default CartProduct
