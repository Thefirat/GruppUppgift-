import React, { useEffect, useState } from "react"
import '../Style/products.css'
import ProductItem from "../components/ProductItem"




function Products({ addProduct, qty, setQty }) {
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





  return (
    <div className="products-container">
      {
        products.map((product) => (

          <ProductItem
            key={product.id}
            addProduct={addProduct}
            product={product}
            setproducts={setproducts}
            qty={qty}
            setQty={setQty}

          />

        ))
      }

    </div>
  )
}

export default Products



