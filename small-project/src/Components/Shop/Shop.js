import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
const Shop = () => {


    const [products, setProducts] = useState([])

    const [cart, setCart]  = useState([])


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddClick = (product) => {
    
        const newCart = [...cart, product]
        setCart(newCart)

    }

    return (
        <div className='shop-contianer'>
           
                 <div className="products-container">

                  {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddClick={handleAddClick}

                    ></Product>)
                  }

                 </div>
                 <div className="shop-container">
        
                  <h2>Order Summary </h2>

                  <p>Selected Items  : {cart.length}</p>

                 </div>





        </div>
    );
};

export default Shop;