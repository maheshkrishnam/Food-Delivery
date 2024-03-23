import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Navbar({setShowLogin}) {
  const [pageActive, setPageActive] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <Link to={'/'} className={pageActive==="home" ? "active":""}>Home</Link>
        <HashLink to={'#explore-menu'} className={pageActive==="menu" ? "active":""}>Menu</HashLink>
        <HashLink to={'#app-download'} className={pageActive==="mobile-app" ? "active":""}>Mobile App</HashLink>
        <HashLink to={'#footer'} className={pageActive==="active" ? "active":""}>Contact Us</HashLink>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar