import React, { createContext, useState } from 'react';

// Create the context
export const ProductCartContext = createContext();

// Create the provider component
export const ProductCartProvider = (props) => {

    const [productCart, setProductCart] = useState("");

    return (
        <ProductCartContext.Provider value={{ productCart, setProductCart }}>
            {props.children}
        </ProductCartContext.Provider>
    )
};