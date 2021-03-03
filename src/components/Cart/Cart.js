import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce( (total,prdt)=>{
        return total+prdt.price;
    },0);

    let shippingCost = 0;
    if(totalPrice>500){
        shippingCost = 0;
    }
    else if(totalPrice>200){
        shippingCost = 10;
    }
    let tax = totalPrice*0.1;
    
    return (
        <div>
            <h4>Order Summery</h4>
            <h5>Items in cart: {cart.length}</h5> <br />

            <p>Items: {Math.round(totalPrice).toFixed(2)}$</p>
            <p>Shipping cost: {Math.round(shippingCost)}$</p>
            <p>Total without Tax: {Math.round(totalPrice+shippingCost).toFixed(2)}$</p>
            <p>Estimated Tax: {Math.round(tax).toFixed(2)}$</p>
            <h3>Order Total: {Math.round(totalPrice+shippingCost+tax).toFixed(2)}$</h3>
        </div>
    );
};

export default Cart;