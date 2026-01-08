import React from 'react'
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './Nav.css';
const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder='Enter your search shoes'/>
      </div>
      <div className="profile-container">
        <a href="">
          <FiHeart className='nav-icons'></FiHeart>
        </a>
        <a href="">
          <AiOutlineShoppingCart className='nav-icons'></AiOutlineShoppingCart>
        </a>
        <a href="">
          <AiOutlineUserAdd className='nav-icons'></AiOutlineUserAdd>
        </a>
      </div>
    </nav>
  )
}

export default Navigation;