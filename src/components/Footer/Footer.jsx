import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae quasi provident enim doloremque voluptas, ipsa nobis id nulla sed dolor beatae fuga quas expedita perferendis cupiditate! Dolores, quaerat provident! Quia, ullam minus. Pariatur sapiente aperiam accusamus quos at illo quasi voluptatum repellat possimus unde fuga, dicta error, impedit libero deserunt saepe, doloremque nemo natus dolore inventore in. Consequatur, ipsa!</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h1>company</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h1>get in touch</h1>
          <ul>
            <li>+918765432190</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copywrite 2024 © Tomato.com - All Right Reserved</p>
    </div>
  )
}
