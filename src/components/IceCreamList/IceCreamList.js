import React, { useState } from 'react'
import './IceCreamList.css'
import IceCreamItem from '../IceCreamItem/IceCreamItem'

const IceCreamList = ({list, isSavedPage, setPrice, setNumber}) => {

  const [visibleNumber, setVisibleNumber] = useState(10);
  const [inputValue, setInputValue] = useState('');
  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function addMoreClick() {
    setVisibleNumber(visibleNumber => visibleNumber+=2)
  }
  
  return (
    <>
      {!isSavedPage && <label for="icecream" className='input-label'>введите название:</label>}
      {!isSavedPage && <input id='icecream' type='text' value={inputValue} onChange={handleInputChange} className='input'/>}
      <ul className='icecream-list'>
        {list.filter((item) => {
          // если сохраненная страница и если есть в localStorage
          if(isSavedPage && !localStorage.getItem(item.id)) {
            return false;
          }
          return true;
        }).filter(item => {
          if (isSavedPage) return true; // нет поиска на странице сохраненных
          return item.title.toLowerCase().includes(inputValue.toLowerCase())
        }).filter((item, i) => {
          // отображаются все, если идет поиск и если это страница сохраненных
          if(!isSavedPage && inputValue === '' && i + 1 > visibleNumber) return false;
          return true;
        }).map(item => {
          const {id, title, image, cost} = item;
          const iceCreamItem = {id, title, image, cost};
          return (
            <IceCreamItem 
              key={id}
              iceCreamItem={iceCreamItem}
              isSavedPage={isSavedPage}
              setPrice={setPrice}
              setNumber={setNumber}
            />)
        })} 
      </ul>
      {(visibleNumber < list.length && !isSavedPage && inputValue === '') && <button onClick={addMoreClick} className='show-more-btn'>показать еще</button>}
    </>
  )
}

export default IceCreamList