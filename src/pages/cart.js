import React from "react";
import '../cssFiles/home.css';
import Navbar from "../components/navbar";
import CartDetails from "../components/cartDetails";
import Footer from '../components/Footer';

const Cart = () => {
    return (
        <div>
            <Navbar/>
            <CartDetails/>
            <Footer />
        </div>
    );
}

export default Cart;