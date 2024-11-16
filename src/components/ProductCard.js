import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductDetailContext } from '../Context/ProductDetailsContext'

const ProductCard = (props) => {
    const { setProductDetail } = useContext(ProductDetailContext);
    const handleClick = () => {
            const product = {
                id:props.id,
                name:props.name,
                price: props.price,
                logo: props.logo,
                description:props.description,
                brand: props.brand,
            }
            setProductDetail(product);
        }
    return (
        <Link className="product-card flex" to="/product"  onClick={handleClick}>
            <img src={props.logo} alt="" class="product-img" />
            <div className="product-details">
                <p className="price">₹ <span>{props.price}</span>.00</p>
                <p>{props.name}</p>
            </div>
        </Link>
    )
}

export default ProductCard
