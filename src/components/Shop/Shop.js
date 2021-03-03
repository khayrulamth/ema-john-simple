import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    // console.log(fakeData);
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("added",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products handleAddProduct={handleAddProduct} key={product.key} product={product}></Products>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;