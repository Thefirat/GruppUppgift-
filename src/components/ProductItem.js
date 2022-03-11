import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function ProductItem({ addProduct, product, qty }) {
  const [quantityInput, setQuantityInput] = useState(1);
  


  const handleChange = (e) => {
    setQuantityInput(e.target.value)


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const item = { ...product, quantity: quantityInput }
    addProduct(item)
    console.log(item);
  }

  return (
    <div>
      <section key={product.id} className="section">
        <Link to={`/product/${product.id}`}> <motion.img
          animation={{
            boxShadow: "0px 0px 0px 8px rgb(201, 193, 193)"
          }}
          whileHover={{
            scale: 1,
            textShadow: "0px 0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 0px 8px rgb(255,255,255)"

          }}
          className="img" src={product.url} alt={product.title}></motion.img></Link>
        <h2>{product.title}</h2>
        <h4>{product.price} SEK</h4>

        <form onSubmit={(e) => handleSubmit(e, qty)}  >
          <div className="addToCart">
            <input className="quantity-Input" type="number" min="1" value={quantityInput} required onChange={handleChange} ></input>
            <button className="faProducts">< FaShoppingCart /></button>
          </div>
        </form>
      </section>

    </div>
  )
}

export default ProductItem


