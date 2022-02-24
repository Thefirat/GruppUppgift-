import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


function Product() {
    const [product, setproduct] = useState({});
    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php?id=' + params.para);
            const data = await response.json();
            console.log(params);

            setproduct(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <section className='firat'>
           <img src={product.url}></img>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price:{product.price}</p>
            <p>Storage:{product.storage}</p>
        </section>
    )
}

export default Product

