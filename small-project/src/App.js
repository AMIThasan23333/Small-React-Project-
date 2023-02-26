import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Country from './Countries/Country';


function App() {
  return (
    <div className="App">
      
      <LoadCountries></LoadCountries>

      <Country></Country>

    </div>
  );
}



  function LoadCountries(){


const [countries, setCountries] = useState([])

useEffect( () => {

  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => setCountries(data))

}, [])

    return (

      <div>
        <h1>Visting Every Country oF THE WORLD </h1>
        <h3>Available Countries {countries.length}</h3>
      </div>
    )
  }

export default App;
