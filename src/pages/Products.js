import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'


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
}, []);




return (
    <div>
      <h1>Products</h1>
      {
        products.map(product => (
          <article>
            <img src={product.url}></img>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
            <Link to={`/product/${product.id}`}>About</Link>
          </article>
        )

        )
      }
    </div>
  )
}

export default Products