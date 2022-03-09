import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';
import {motion} from "framer-motion";
 

function Header({items, countCartItems, setItems, deleteItem, deleteAll}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <div className="container">
          <div className="header-bar">
            <Link to="/" className='logo'><motion.h1
            initial={{
              x: "-300px",
              scale:2,
              opacity: 0

            }}
             animate={{
               x: "0",
               y: "0",
               opacity: 0.5,
               scale:1
             }}

             trancition={{
               duration: 10,
               ease:"easeIn" 
               
             }}
             >G-Seven Tech</motion.h1></Link>
            </div>

            <div className="slider-menu"> 
              {countCartItems ? (
                <button className='countBtn'>{countCartItems}</button>
              ) : 
                ''
              }
              <div className='shopingIcon-header' onClick={() => {setOpen(true)}}>< FaShoppingCart/></div>
              </div>
            
            <Cart
             items={items}
             setItems={setItems}
             open = {open}
             setOpen = {setOpen}
             deleteItem={deleteItem } 
             deleteAll={deleteAll}
            />
          

        </div>

    </div>
  )
}

export default Header
