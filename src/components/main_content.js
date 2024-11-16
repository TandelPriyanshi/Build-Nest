import React, {useEffect, useContext} from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../Context/ProductContext";


const Main = () => {
    const { product ,getAllProduct } = useContext(ProductContext);
        useEffect(() => {
            getAllProduct();
        },
    [])
    return (
        <div className="maincontent">
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Bricks & Blocks</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Bricks and Blocks" ?
                                <ProductCard 
                                    id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description = {product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Cement</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Building Materials" ?
                                <ProductCard 
                                    id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Electrical Materials</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Electrical Materials" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Natural Stones</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Natural Stone" ?
                                <ProductCard 
                                    id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Paints and Finishes</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Paints and Finishes" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Plumbing</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Plumbing" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Sand & Aggregates</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Sand & Aggregates" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Tiles</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Tiles" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>TMT Steel Bars</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "TMT Steel Bars" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
            <div className="main-product-section">
                <div className="product-section">
                    <div className="section-header">
                        <h2>Wooden Products</h2>
                    </div>
                    <div className="product-container">
                    {
                        product.length > 0 ? (
                            product.map((product, index) => (
                                product.category === "Wooden Products" ?
                                <ProductCard 
                                id={product._id}
                                    logo={product.img} 
                                    price={product.price} 
                                    name= {product.name}
                                    index = {index}
                                    description={product.description}
                                    brand={product.brand}
                                /> : null
                            ))
                        ) : (null)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;