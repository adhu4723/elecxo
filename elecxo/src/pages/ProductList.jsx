import React from 'react'
import { useParams } from 'react-router-dom'

function ProductList() {
    const {name}=useParams()
    console.log(name);
    
  return (
    <div>
      <h1>Showing 1 – 24 of 89 results for <strong> {name}</strong>
      </h1>
    </div>
  )
}

export default ProductList
