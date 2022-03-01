import React from 'react';
import '../Style/cart.css'
import { FaTrash, FaWindowClose } from 'react-icons/fa';



function Cart({ items }) {
  


  return (
<div>
  
    <div className='cart-container'>{
      items.map(item => (
        <section className="cart-section" key={item.id}>
          <div className='cart-header'>
            <h2>ORDER SUMMARY</h2>
            <div>{item.length === 0 && <div>Cart is empty</div>}</div>
            <div className='closeBtn'><FaWindowClose /></div>
          </div>
          <div className='cart-body'>
            <img className="cart-img" src={item.url} alt={item.title}></img>
            <div className='cart-items'>
            <h3>{item.title}</h3>
            <h4>{item.price} SEK</h4>
           <button>+</button>
           <button>-</button>
            </div>
            <button className='cart-trash'><FaTrash /></button>
          </div>
          <div className='cart-footer'>
            <h3>TOTAL</h3>           
            <button className='cart-checkout'>Checkout</button>
          </div>
        </section>
      ))

    }

    </div>
    </div>
  )

}

export default Cart