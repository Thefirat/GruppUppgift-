import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
        <div class="container">
        <Link to="/"><h1 class="logo">F&L Tech</h1></Link>
          <div class="header-bar">
          <h1 class="logo">F&L</h1>
              <Link to="/checkout" class="slider-menu"><button className='cartBtn'>Cart</button></Link>
          </div>
        </div>

        <Link to="/"><p class="aeu-signature">💕Home💕</p></Link>
      </div>

    </div>
  )
}

export default Header