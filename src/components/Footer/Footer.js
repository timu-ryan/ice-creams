import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <h3 className='footer__title'>Гафаров Тимур</h3>
      <address class="footer__address">
        <a href="https://t.me/timuryanst" target="_blank" class="footer__link">telegram</a>
        <a href="tel:+79872729464" target="_blank" class="footer__link">+7 987 272 9464</a>
        <a href="mailto:timu.ryanst@gmail.com" target="_blank" class="footer__link">timu.ryanst@gmail.com</a>
      </address>
    </section>
  )
}

export default Footer