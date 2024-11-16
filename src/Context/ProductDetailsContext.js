import React, { createContext, useState } from 'react';

// Create the context
export const ProductDetailContext = createContext();

// Create the provider component
export const ProductDetailProvider = (props) => {

    const [productDetail, setProductDetail] = useState("");

    return (
        <ProductDetailContext.Provider value={{ productDetail, setProductDetail }}>
            {props.children}
        </ProductDetailContext.Provider>
    )
};