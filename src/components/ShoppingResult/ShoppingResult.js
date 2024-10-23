import React from 'react'
import './ShoppingResult.css'

const ShoppingResult = ({price, number}) => {
  return (
    <section className='shopping-result'>
      <p>Всего товаров: {number}</p>
      <p>Общая цена: {price}</p>
    </section>
  )
}

export default ShoppingResult