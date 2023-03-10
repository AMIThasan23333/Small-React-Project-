import React from 'react';
import { Link } from 'react-router-dom';

 
import logo from '../images/Logo.svg';
import './Header.css';



const Header = () => {
    return (
        <div className='header'>
           
           <img src={logo} alt="" srcset="" />

         <div>
         <Link to="/">Shop</Link>
           <Link to="/orders">Order</Link>
           <Link to="/inventory">Inventory</Link>
           <Link Link to="/about">About</Link>
         </div>
        </div>
    );
};

export default Header;