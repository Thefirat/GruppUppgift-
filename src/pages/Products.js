import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import '../Style/products.css'


function Products() {
const[products, setproducts] = useState([]);

const fetchData = async () => {
  try{
    const response = await fetch('https://codexplained.se/electronics.php');
    const data = await response.json();

  setproducts(data);
  }catch(error){

  }
}

useEffect(() => {
  fetchData();
},[]);





return (
    <div className="products-container">
      {
        products.map(product => (
          <section className="section">
           <Link to={`/product/${product.id}`}> <img className="img" src={product.url} alt={product.title}></img></Link>
            <h2>{product.title}</h2>
            <h4>{product.price} Kr</h4>
            <input type ="number" min="1" max="10" placeholder="quantity"></input>
            <button>Add to Cart</button>
           
           
          </section>
        )

        )
      }
    </div>
  )
}

export default Products