import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProducts] = useState(firstTen)
    return (
        <div>
            <h1>This is my Shop</h1>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;