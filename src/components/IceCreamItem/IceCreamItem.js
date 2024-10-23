import React, { useState } from 'react'
import './IceCreamItem.css'

// const IceCreamItem = ({id, title, cost, imageSrc, isSaved}) => {

const IceCreamItem = ({iceCreamItem, isSavedPage, setPrice, setNumber}) => {
  // check is saved!
  const {id, title, cost, image} = iceCreamItem;
  
  const [isSaved, setIsSaved] = useState(localStorage.getItem(id));

  function addToFavourites() {
    localStorage.setItem(id, JSON.stringify(iceCreamItem));
    setIsSaved(true)
    setPrice(price => {
      localStorage.setItem('totalPrice', price + cost);
      return price + cost;
    });
    setNumber(number => { 
      localStorage.setItem('totalNumber', number + 1);
      return number + 1;
    });
  }

  function removeToFavourites() {
    localStorage.removeItem(id);
    setIsSaved(false)
    setPrice(price => {
      localStorage.setItem('totalPrice', price - cost);
      return price - cost;
    });
    setNumber(number => { 
      localStorage.setItem('totalNumber', number - 1);
      return number - 1;
    });
  }

  return (
    <li key={id} className='icecream'>
      <img alt={title} src={image} className='icecream__image'/>
      <div className='icecream__text-container'>
        <h3 className='icecream__title'>{title}</h3>
        <div className='icecream__info'>
          <p className='icecream__price'>Цена: {cost}р</p>
          {!isSavedPage ?
            <button 
              className='icecream__button'
              disabled={isSaved}
              onClick={addToFavourites}
            >{!isSaved ? 'Сохранить' : 'Сохранено'}</button>
          : <button 
              className='icecream__button'
              disabled={!isSaved}
              onClick={removeToFavourites}
            >{isSaved ? 'Удалить' : 'Удалено'}</button>
          }
        </div>
      </div>
    </li>
  )
}

export default IceCreamItem