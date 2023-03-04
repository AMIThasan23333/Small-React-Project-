import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
// import Header from './Components/Header/Header';
// import Shop from './Components/Shop/Shop';
// import Country from './Countries/Country';


function App() {


  const router = createBrowserRouter([

    {
      path :'/',
      element : <Main></Main>
    }

  ])



  return (
    <div>
   
  <RouterProvider router={router}></RouterProvider>

    </div>
  );
}



export default App;
