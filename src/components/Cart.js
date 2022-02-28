import React from 'react';



function Cart({items}) {
 
  return (
    <div className='cart-container'>{
      items.map(item =>(
        <section key={item.id}>
          <h3>{item.title}</h3>
            <h4>{item.price} Kr</h4>
        </section>
      ))
    }

      
    </div>
  )
}

export default Cart