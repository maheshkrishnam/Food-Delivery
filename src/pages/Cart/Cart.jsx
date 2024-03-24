import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartItem, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p className='food-image'>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-items-detail">
          {
            food_list.map((item, index)=>{
              if(cartItem[item._id] > 0){
                return (
                  <div className="cart-item-title cart-items-item" key={index}>
                    <img src={item.image} alt="" className='food-image'/>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id]}</p>
                    <img src={assets.cross_icon} alt="" className='cross' onClick={()=>removeFromCart(item._id)}/>
                  </div>
                )
              }
            })
          }
        </div>
        <div className="cart-bottom">
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
                <p>${getTotalCartAmount() ? 2 : 0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalCartAmount() ? 2 + getTotalCartAmount() : 0}</p>
              </div>
            </div>
            <button className='checkout' onClick={()=>navigate('/order')}>proceed to checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code'/>
                <button type='submit'>submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart