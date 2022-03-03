import React from "react"
import '../Style/cart.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";




function Cart({ items, setItems, open, setOpen, sum, deleteAll }) {

  const deleteItem = (id) => {
    let inCart = items.filter(item => item.id !== id)

    setItems(inCart)

  }

   
  const hadleDeleteAll = () => {
         
    deleteAll()
   
  }


  return (
    <>

      <div className={`cart-container ${open && 'open'}`}>
        <div className='cart-header'>
          <h2>ORDER SUMMARY</h2>
          <div className='closeBtn' onClick={() => setOpen(!open)}><FaWindowClose /></div>
        </div>
        <div>{items.length === 0 && <h3 className='empty'>Cart is empty</h3>}</div>
        <div className="product-cart-container">
          {
            items.map((item) =>
              <CartItem
                key={item.id}
                items={items}
                item={item}
                deleteItem={deleteItem}

              />
            )
          }
        </div>

        <div className='cart-footer'>
          <h3>TOTAL: {sum} SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>
          
        </div>
        <button onClick={hadleDeleteAll} className='cart-delete'>Remove all</button>
      </div>

    </>
  )

}

export default Cart