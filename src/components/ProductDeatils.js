import React, { useContext, useState } from "react";
import { ProductDetailContext } from "../Context/ProductDetailsContext";

const ProductDeatils = () => {
    const { productDetail } = useContext(ProductDetailContext);
    const [ quantity, setQuantity] = useState();

    const HandleChange = (event) => {
        setQuantity(event.target.value);
    }
    const HandleClick = () => {
        const myHeaders = new Headers();
        const Token = localStorage.getItem('token')
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${Token}` );

        const raw = JSON.stringify({
            "productId": productDetail.id,
            "quantity": quantity
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:5000/api/cart/cart", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

            alert("Item Added to Cart")
    }

    return (
        <div className="product-container-m">
            <div className="left-half">
                <img src={productDetail.logo} alt="Photos" classNameName="product-image" />
            </div>
            <div className="right-half">
                <h1>{productDetail.name}</h1>
                <h2 className="price">₹{productDetail.price}</h2>
                <p className="description">{productDetail.description}</p>
                <p className="brand">Brand: {productDetail.brand}</p>

                <div classNameName="quantity">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" classNameName="quantity-ip" placeholder="Enter Quantity" value={quantity} onChange={HandleChange} />
                </div>
                <button className="head-primary-button" onClick={HandleClick}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDeatils;