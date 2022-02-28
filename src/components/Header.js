import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css'
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <div>
        <div class="container">
          <div class="header-bar">
            <Link to="/"><h1 class="logo">G-Seven Tech</h1></Link>
            <Link to="/Checkout" class="slider-menu"><FaShoppingCart /></Link>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Header
