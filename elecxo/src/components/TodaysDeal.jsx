import React from 'react'
import electronicProducts from '../assets/data/product'
import Card from './ProductCard'
function TodaysDeal() {


  return (
    <div>
      <h1 className='font-bold text-lg  uppercase'>
        today's deal
      </h1>
      <div className='grid grid-cols-2 gap-2 lg:grid-cols-5 '>
    {electronicProducts.slice(0, 11).map((items)=>(
    <Card productData={items} />
))}
      </div>
    </div>
  )
}

export default TodaysDeal
