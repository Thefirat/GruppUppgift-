import React, { useState, useEffect } from "react"
import '../Style/cart.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";




function Cart({ items, setItems, open, setOpen, deleteAll, qty }) {
  const [cartTotal, setCartTotal] = useState(0);




  useEffect(() => {
    total()
    console.log(items)
  }, [items]);

  const total = () => {
    let totalVal = 0;
    for (let summa = 0; summa < items.length; summa++) {
      totalVal += items[summa].price;
    }

    setCartTotal(totalVal)
  };


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
            items.map((item, i) =>

              <CartItem
                key={item.id}
                items={items}
                item={item}
                deleteItem={deleteItem}
                qty={qty}
                index={i}

              />
            )
          }
        </div>
        <button onClick={hadleDeleteAll} className='cart-delete'>Clear all</button>

        <div className='cart-footer'>
          <h3>TOTAL:{cartTotal * qty} SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>

        </div>

      </div>

    </>
  )

}

export default Cart