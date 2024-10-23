import React, { useState } from 'react'
import './IceCreamList.css'
import IceCreamItem from '../IceCreamItem/IceCreamItem'

const IceCreamList = ({list, isSavedPage, setPrice, setNumber}) => {

  const [visibleNumber, setVisibleNumber] = useState(10);

  function addMoreClick() {
    setVisibleNumber(visibleNumber => visibleNumber+=2)
  }

  return (
    <>
      <ul className='icecream-list'>
        {list.filter((item) => {
          // если сохраненная страница и если есть в localStorage
          if(isSavedPage && !localStorage.getItem(item.id)) {
            return false;
          }
          return true;
        }).filter((item, i) => {
          if(!isSavedPage && i + 1 > visibleNumber) return false;
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
      {(visibleNumber < list.length && !isSavedPage) && <button onClick={addMoreClick} className='show-more-btn'>показать еще</button>}
    </>
  )
}

export default IceCreamList