import React from 'react'
import './IceCreamList.css'
import IceCreamItem from '../IceCreamItem/IceCreamItem'

const IceCreamList = ({list, isSavedPage}) => {

  return (
    <ul className='icecream-list'>
      {list.filter((item) => {
        if(isSavedPage && !localStorage.getItem(item.id)) {
          return false;
        }
        return true;
      }).map(item => {
        const {id, title, image, cost} = item;
        const iceCreamItem = {id, title, image, cost};
        return (
          <IceCreamItem 
            key={id}
            iceCreamItem={iceCreamItem}
            isSavedPage={isSavedPage}
          />)
      })} 
    </ul>
  )
}

export default IceCreamList