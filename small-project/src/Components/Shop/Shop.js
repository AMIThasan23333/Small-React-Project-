import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
const Shop = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    return (
        <div className='shop-contianer'>
           
                 <div className="products-container">

                  {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    
                    ></Product>)
                  }

                 </div>
                 <div className="shop-container">
        
                  <h2>Order Summary </h2>

                 </div>





        </div>
    );
};

export default Shop;