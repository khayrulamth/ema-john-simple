import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {name,seller,stock,img,price} = props.product
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className="product-desc">
                <h3>{name}</h3>
                <p >by:{seller}</p>
                <h4>price: ${price}</h4>
                <p>Only {stock} is available</p>
                <button className='buy-button' onClick={()=>{
                    props.handleAddProduct(props.product);
                }
                }><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                <br/>
            </div>
        </div>
    );
};

export default Products;