import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
  const [currState, setCurrStage] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-pop-title">
          <h2>
            {currState}
          </h2>
          <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
          {currState==='Login' ? <></> : <input type='text' placeholder='Your name' required/>}
          <input type="email" placeholder='Your email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==='Signup' ? 'Create Account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState==='Login' ? <p>Create a new account <span onClick={()=>setCurrStage('Signup')}>Click here</span></p> : <p>Already have account? <span onClick={()=>setCurrStage('Login')}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUp