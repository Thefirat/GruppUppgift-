import '../Style/product.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Product({ addProduct }) {
    const [product, setproduct] = useState({});
    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php?id=' + params.wie);
            const data = await response.json();
            console.log(data);

            setproduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (product) => {
        addProduct(product)
    }

    return (
        <section key={product.id} className='product-add'>
            <section>
                <img className='img-add' alt='Bild' src={product.url}></img>
            </section>

            <section>
                <h1 className='title-add'>{product.title}</h1>
                <p className='desc-add'>{product.description}</p>
                <h3 className='price-add'>Price:{product.price}</h3>
                <h4 className='storage-add' id='storage-id'>Storage:{product.storage}</h4>
                <button className='btn-add' onClick={() => handleClick(product)}>Add to Cart</button>
            </section>
        </section>
    )
}

export default Product