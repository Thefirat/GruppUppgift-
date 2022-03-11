import React from "react"
import { FaTrash } from 'react-icons/fa'
import styled from "styled-components"

function CartItem({ item, deleteItem, qty}) {


    const hadleDeleteBtn = () => {

        deleteItem(item.id);
        console.log(hadleDeleteBtn);

    }



    return (
        <Style>

            <section className="cart-section" key={item.id}>
                <div className='cart-body'>
                    <img className="cart-img" src={item.url} alt={item.title}></img>

                    <div className='cart-items'>
                        <h3>{item.title}</h3>
                        <h4>{item.price} SEK</h4>

                        <p className='plus-minus'>Quantity:{qty} </p>

                        <div className='cartPrice'>
                            <p>{qty} x {item.price} = {qty * item.price} SEK </p>
                            <div onClick={hadleDeleteBtn} className='cart-trash'><FaTrash /></div>
                        </div>
                    </div>

                </div>
            </section>

        </Style>
    )
}


const Style = styled.div`

.cart-body {
    margin-top: 30px; 
    display: flex;
    justify-content: space-around;
}

.cart-img{
    height: 200px;
    width: 190px;
    object-fit: cover;
}

.cart-items{
    display: flex;
    gap: 10px;
    flex-direction: column;
    
}

.cartPrice{
    display: flex;
    gap: 40px;

}

.cart-trash{
    display: flex;
    align-items: center;
    font-size: 1rem;
   
}

.cart-trash:hover{
    font-size: 1.2rem;

}


`
export default CartItem