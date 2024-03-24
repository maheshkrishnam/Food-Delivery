import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext)
  const [deleveryAmount, setdeliveryAmount] = useState(0);

  return (
    <div className='placeorder'>
      <form className="place-order">
        <div className="place-irder-left">
          <h1 className="title">Delivery Imformation</h1>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
              </div>
              <button className='payment'>PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder