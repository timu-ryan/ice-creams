import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

  return (
    <section className='navigation'>
      <nav className='navigation__bar'>
        <NavLink to="/" className={
            ({isActive}) => `${isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}`
          }>
          Главная
        </NavLink>
        <NavLink to="/saved-icecreams" className={
            ({isActive}) => `${isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}`
          }>
          Сохраненные мороженые
        </NavLink>         
      </nav>
    </section>
  )
}

export default Navigation