import '../Style/product.css'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



function Product() {
    const [product, setproduct] = useState({});
    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php?id=' + params.wie);
            const data = await response.json();
            console.log(data);

            setproduct(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);


    return (
        <div className='product-container'>
            <h1>Product: {product.wie}</h1>
            <img src={product.url}></img>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price:{product.price}</p>
            <p>Storage:{product.storage}</p>
        </div>
    )
}

export default Product