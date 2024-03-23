import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, setCartItem, addToCart, removeFromCart} = useContext(StoreContext)


  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />
        <div className="food-item-info">
          <div className="food-item-name-rating">
            {
              !cartItem[id] ? <img src={assets.add_icon_white} alt="" onClick={() => addToCart(id)} className="food-item-counter-initial"/> : <div className="food-item-counter">
                <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)}/>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)}/>
              </div>
            }
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem