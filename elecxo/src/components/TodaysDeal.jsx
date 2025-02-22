import React from 'react'
import electronicProducts from '../assets/data/product'
function TodaysDeal() {


  return (
    <div>
      <h1 className='font-bold text-lg  uppercase'>
        today's deal
      </h1>
      <div className='flex gap-4 justify-center lg:justify-start flex-wrap'>
{electronicProducts.slice(2, 6).map((items)=>(
    <div className='border grid grid-cols-1 p-4 rounded-2xl w-full lg:w-[290px] '>
        <img src={items.image} width={150} alt="" />
        <div className='mt-6'>
        <h1 className='text-lg font-bold'>{items.name}</h1>
        <p className='line-clamp-2 '>{items.description}</p>
        <div className='flex gap-2'>
        <p className='line-through'>Rs 1500</p>
        <p className='font-bold'>Rs .{items.rate}</p>
        </div>
      
        </div>
        
    </div>
))}
      </div>
    </div>
  )
}

export default TodaysDeal
