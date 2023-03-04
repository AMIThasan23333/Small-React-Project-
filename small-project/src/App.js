import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Shop from './Components/Shop/Shop';
import Order from './Components/Order/Order';
// import Header from './Components/Header/Header';
// import Shop from './Components/Shop/Shop';
// import Country from './Countries/Country';
import inventory from './Components/inventory/inventory';


function App() {


  const router = createBrowserRouter([

    {
      path :'/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element: <Shop></Shop>
        },
        {
          path:'/orders',
          loader: () => fetch('products.json'),
          element: <Order></Order>
        },
        {
          path : '/inventory',
          element: <inventory></inventory>
        }
      ]
    }

  ])



  return (
    <div>
   
  <RouterProvider router={router}></RouterProvider>

    </div>
  );
}



export default App;
