import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {



    let  total =0;
    let shipping =0;


    for(const product of cart){

        total = total + product.price;

        shipping = shipping + product.shipping;
    }

    const tax =  parseFloat ((total *  0.1).toFixed(2));
        
    const grandtotal = total + shipping + tax;






    return (
        <div className='cart'>
                    <h2>Order Summary </h2>

                  <p>Selected Items  : {cart.length}</p>

                  <p>Total Price : ${total} </p>
                  <p>Totla Shipping: 4{shipping}</p>
                  <p>Tax : {tax} </p>
                  <h4>Grand Total : {grandtotal}</h4>
        </div>
    );
};

export default Cart;