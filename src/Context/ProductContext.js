import React, { createContext, useState } from 'react';

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = (props) => {

    const [product, setProduct] = useState("");

    const getAllProduct = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            console.log(json);
            setProduct(json);
    
        } catch (error) {
            alert("Failed to connect to server.");
        }
    };  

    return (
        <ProductContext.Provider value={{ product, setProduct, getAllProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
};