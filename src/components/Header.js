import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div>
      <div>
      <Link to="/">Hemsidans namn</Link>
      </div>
      <button>Cart</button>
    </div>
  )
}

export default Header