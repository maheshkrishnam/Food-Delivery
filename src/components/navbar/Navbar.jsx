import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
  const [pageActive, setPageActive] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li className={pageActive==="home" ? "active":""}>Home</li>
        <li className={pageActive==="menu" ? "active":""}>Menu</li>
        <li className={pageActive==="mobile-app" ? "active":""}>Mobile App</li>
        <li className={pageActive==="active" ? "active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar