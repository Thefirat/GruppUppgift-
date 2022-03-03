import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';


function Header({items, countCartItems, setItems}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <div className="container">
          <div className="header-bar">
            <Link to="/" className='logo'><h1>G-Seven Tech</h1></Link>
            <div className="slider-menu"> 
              {countCartItems ? (
                <button className='countBtn'>{countCartItems}</button>
              ) : 
                ''
              }
              <button  onClick={() => {setOpen(true)}}>test</button>
              </div>
            
            <Cart
             items={items}
             setItems={setItems}
             open = {open}
             setOpen = {setOpen}
            />
          </div>

        </div>

    </div>
  )
}

export default Header
