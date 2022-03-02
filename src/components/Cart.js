import React from "react"
import '../Style/cart.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";




function Cart({items, setItems}) {

  const deleteItem = (id) => {
    console.log( 'cart ->deleteItem ')
    console.log('ID:' + id);

    let removeItem = items.filter(item => item.id !== id)
    setItems(removeItem)  
    
  }  
   

  return (
    <>

      <div className='cart-container'>
        <div className='cart-header'>
          <h2>ORDER SUMMARY</h2>
          <div className='closeBtn'><FaWindowClose /></div>
        </div>
         <div>{items.length === 0 && <h3 className='empty'>Cart is empty</h3>}</div>
         {
         
         items.map( (item) => <CartItem key={item.id} items={items} item={item} deleteItem={deleteItem}/>
         )
         }

        <div className='cart-footer'>
          <h3>TOTAL: SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>
        </div>
      </div>
    
    </>
  )

}

export default Cart