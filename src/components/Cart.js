import React from "react"
import '../Style/cart.css'
import { FaTrash, FaWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";



function Cart({items, deleteItem}) {

  


  const hadleDeleteBtn = () => {

    console.log('item -> hadleDeleteBtn()')
    console.log(items)

     

    deleteItem(items.id);

  }
   



  return (
    <>

      <div className='cart-container'>
        <div className='cart-header'>
          <h2>ORDER SUMMARY</h2>
          <div className='closeBtn'><FaWindowClose /></div>
        </div>
        <div>{items.length === 0 && <h3 className='empty'>Cart is empty</h3>}</div>
        {items.map(item => (
          <section className="cart-section" key={item.id}>
            <div className='cart-body'>
              <img className="cart-img" src={item.url} alt={item.title}></img>

              <div className='cart-items'>
                <h3>{item.title}</h3>
                <h4>{item.price} SEK</h4>
                <button>+</button>
                <button>-</button>
              </div>
              <button onClick={hadleDeleteBtn}className='cart-trash'><FaTrash /></button> 
            </div>
          </section>

        ))}

        <div className='cart-footer'>
          <h3>TOTAL: SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>
        </div>
      </div>

    </>
  )

}

export default Cart