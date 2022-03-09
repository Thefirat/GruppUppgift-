import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../Style/products.css'
import { FaShoppingCart } from 'react-icons/fa';
import {motion} from "framer-motion"


function Products({ addProduct }) {
  const [products, setproducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php');
      const data = await response.json();

      setproducts(data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleClick = (product) => {
    addProduct(product)
    console.log(product);
  }

  


  return (
    <div className="products-container">
      {
        products.map(product => (
          <section key={product.id}className="section">
            <Link to={`/product/${product.id}`}> <motion.img 
            animation={{
              boxShadow:"0px 0px 0px 8px rgb(201, 193, 193)"
            }}
            whileHover={{
             scale:1,
             textShadow:"0px 0px 0px 8px rgb(255,255,255)",
             boxShadow:"0px 0px 0px 8px rgb(255,255,255)"

            }}
            className="img" src={product.url} alt={product.title}></motion.img></Link>
            <h2>{product.title}</h2>
            <h4>{product.price} SEK</h4>
            <div className="addToCart">
            <input className="quantityInput" type="number" min="1" max="20" placeholder="quantity"></input>
            <div className="faProducts" onClick={() => {handleClick(product)}}>< FaShoppingCart/></div>
            </div>


          </section>
        )

        )
      }
    </div>
  )
}

export default Products



