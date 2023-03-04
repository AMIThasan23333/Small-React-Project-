import React from 'react';
import './Cart.css';

const Cart = ({cart, clearCart, children}) => {



    let  total =0;
    let shipping =0;
    let quantity = 0;



    for(const product of cart){

        quantity = quantity + product.quantity;

        total = total + product.price * product.quantity;

        shipping = shipping + product.shipping;
    }

    const tax =  parseFloat ((total *  0.1).toFixed(2));
    
    /* to fixed is a string u have to convert it into a number  */

    const grandtotal = total + shipping + tax;






    return (
        <div className='cart'>
                    <h2>Order Summary </h2>

                  <p>Selected Items  : {cart.length}</p>

                  <p>Total Price : ${total} </p>
                  <p>Totla Shipping: 4{shipping}</p>
                  <p>Tax : {tax} </p>
                  <h4>Grand Total : {grandtotal}</h4>

                  <button onClick={clearCart}>Clear Cart</button>
                  {children}
        </div>
    );
};

export default Cart;