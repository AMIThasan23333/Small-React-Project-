import React, { useEffect, useState } from 'react';
import './Shop.css';
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

                    <h3>This For Product: {products.length} </h3>

                 </div>
                 <div className="shop-container">
        
                  <h2>Order Summary </h2>

                 </div>





        </div>
    );
};

export default Shop;