import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Гафаров Тимур</h3>
      <address className="footer__address">
        <a href="https://t.me/timuryanst" rel="noreferrer" target="_blank" className="footer__link">telegram</a>
        <a href="tel:+79872729464" rel="noreferrer" target="_blank" className="footer__link">+7 987 272 9464</a>
        <a href="mailto:timu.ryanst@gmail.com" rel="noreferrer" target="_blank" className="footer__link">timu.ryanst@gmail.com</a>
      </address>
    </footer>
  )
}

export default Footer