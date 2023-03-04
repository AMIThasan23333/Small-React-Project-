import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {

    const {products, initialCart} = useLoaderData();

    const [cart,setCart]  = useState(initialCart)


    const clearCart = () => {

        setCart([]);
    
        deleteShoppingCart();
    
       }
    


    const handleRemoveItem = (id) => {

        const remaining = cart.filter(product => product.id !== id);

        setCart(remaining)

        removeFromDb(id)
    }


    return (
       
        <div className='shop-contianer'>
           
        <div className="orders-container">

         {
            cart.map(product => <ReviewItem
            
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
            ></ReviewItem>)
         }

         {cart.length === 0 && <h2>NO items <Link to='/'>Shop more</Link> </h2>}

        </div>
        
        <div className="cart-container">

         <Cart 
         clearCart={clearCart}
         cart={cart}>

         <Link to='/order'>
            <button>Review Order</button>
         </Link>


         </Cart>

        </div>





</div>
       

    );
};

export default Order;