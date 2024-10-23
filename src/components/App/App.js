import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import IceCreamList from '../IceCreamList/IceCreamList';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import ShoppingResult from '../ShoppingResult/ShoppingResult';

const API_URL = 'https://webapi.omoloko.ru/api/v1/products';

async function fetchData(url) {
  try {
    const response = await fetch(url); // Send a GET request to the URL
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Check for response errors
    }
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the parsed data
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
}

function App() {
  const [allIcecreams, setAllIcecream] = useState([]);
  const [price, setPrice] = useState(Number(localStorage.getItem('totalPrice')) || 0);
  const [number, setNumber] = useState(Number(localStorage.getItem('totalNumber')) || 0);

  useEffect(() => {
    fetchData(API_URL).then(data => {
      if (data) {
        setAllIcecream(data.products);
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <ShoppingResult price={price} number={number} />
            <IceCreamList 
              list={allIcecreams} 
              isSavedPage={false} 
              setNumber={setNumber}
              setPrice={setPrice}
            />
          </>
        }/>
        <Route path="/saved-icecreams" element={
          <>
            <Navigation />
            <ShoppingResult price={price} number={number} />
            <IceCreamList 
              list={allIcecreams} 
              isSavedPage={true} 
              setNumber={setNumber}
              setPrice={setPrice}
            />
          </>
        }/>
        <Route path="*" element={
          <>
            <Navigation />
            <PageNotFound />
          </>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
