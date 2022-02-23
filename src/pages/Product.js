import React from 'react'
import {useParams} from 'react-router-dom';

function Product() {
  const params = useParams(); 
  return (
    <div>
      <h1>Product with id: {params.id}</h1>
    </div>
  )
}

export default Product