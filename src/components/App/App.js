import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import IceCreamList from '../IceCreamList/IceCreamList';
import Footer from '../Footer/Footer';

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
  // const [savedIcecreams, setSavedIcecreams] = useState([]);

  // add isSaved to all items in list
  useEffect(() => {
    fetchData(API_URL).then(data => {
      if (data) {
        setAllIcecream(data.products);
        // data.products.forEach(icecream => {
        //   if(localStorage.getItem(icecream.id)) { // if in localStorage => add to saved
        //     setSavedIcecreams([...savedIcecreams, icecream]);
        //   }
        // })
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
            <IceCreamList list={allIcecreams} isSavedPage={false} />
          </>
        }/>
        <Route path="/saved-icecreams" element={
          <>
            <Navigation />
            <IceCreamList list={allIcecreams} isSavedPage={true} />
          </>
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
