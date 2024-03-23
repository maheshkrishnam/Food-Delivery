import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Taste the zest of culinary brilliance on our menu, where each dish dances with the tangy charm of tradition and the zing of modern flair. From cozy classics to avant-garde marvels, let your taste buds tango in a symphony of flavors that promises to whisk you away on a deliciously unforgettable journey</p>
      <div className="explore-menu-list">
        {
          menu_list.map((item, index)=>(
            <div key={index} onClick={()=>setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" className={category === item.menu_name ? "active" : ""}/>
              <p>{item.menu_name}</p>
            </div>
          ))
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu