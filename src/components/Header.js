import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';

function Header({items, countCartItems}) {
  return (
    <div>
        <div className="container">
          <div className="header-bar">
            <Link to="/"><h1 class="logo">G-Seven Tech</h1></Link>
            <Link to="/checkout" class="slider-menu"> 
            {''}
              {countCartItems ? (
                <button className='countBtn'>{countCartItems}</button>
              ) : 
                ''
              }<FaShoppingCart /></Link>
            
            <Cart items={items}/>
          </div>

        </div>

    </div>
  )
}

export default Header
