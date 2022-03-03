import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';


function Header({items, countCartItems, setItems, sum}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <div className="container">
          <div className="header-bar">
            <Link to="/" className='logo'><h1>G-Seven Tech</h1></Link>
            </div>

            <div className="slider-menu"> 
              {countCartItems ? (
                <button className='countBtn'>{countCartItems}</button>
              ) : 
                ''
              }
              <button onClick={() => {setOpen(true)}}>< FaShoppingCart/></button>
              </div>
            
            <Cart
             items={items}
             setItems={setItems}
             open = {open}
             setOpen = {setOpen}
             sum={sum}
            />
          

        </div>

    </div>
  )
}

export default Header
