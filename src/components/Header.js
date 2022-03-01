import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';

function Header({items}) {
  return (
    <div>
        <div className="container">
          <div className="header-bar">
            <Link to="/"><h1 class="logo">G-Seven Tech</h1></Link>
            <Link to="/Checkout" class="slider-menu"><FaShoppingCart /></Link>
            <Cart items={items}/>
          </div>

        </div>

    </div>
  )
}

export default Header
