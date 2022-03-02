import React from 'react'
import { FaTrash } from 'react-icons/fa';

function CartItem({items, item, deleteItem}) {

    const hadleDeleteBtn = () => {

        console.log('item -> hadleDeleteBtn()')
        console.log(item)
    
        deleteItem(item.id);
    
      } 

  return (
    <div>
        
          <section className="cart-section" key={item.id}>
            <div className='cart-body'>
              <img className="cart-img" src={item.url} alt={item.title}></img>

              <div className='cart-items'>
                <h3>{item.title}</h3>
                <h4>{item.price} SEK</h4>
                <button>+</button>
                <button>-</button>
              </div>
               <button onClick={hadleDeleteBtn} className='cart-trash'><FaTrash /></button>  
            </div>
          </section>
        
    </div>
  )
}

export default CartItem