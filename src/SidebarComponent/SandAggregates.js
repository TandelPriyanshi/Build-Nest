import React, {useEffect, useContext} from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";


const SandAggregates = () => {
    const { product ,getAllProduct } = useContext(ProductContext);
        useEffect(() => {
            getAllProduct();
        },
    [])
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="maincontent">
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
            </div>
            <Footer />
        </>
    );
}

export default SandAggregates;