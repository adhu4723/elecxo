import React from 'react'
import { useParams } from 'react-router-dom'
import HorizontalCard from '../components/HorizontalCard';
import FilterTab from '../components/FilterTab';

function ProductList() {
    const {name}=useParams()
    console.log(name);
    
  return (
    <>
    <div className='grid grid-cols-3 lg:grid-cols-4 px-4 py-2 bg-gray-100 gap-4'>
<div className='col-span-1 hidden lg:block  top-0'>
<FilterTab />
</div>
    
    <div className=' space-y-4 col-span-3 bg-gray-100 shadow-sm px-2 py-4'>
      <div className='flex items-center gap-4 justify-between'>
      <h1>Showing 1 – 24 of 89 results for <strong> {name}</strong>
      </h1>
      <button className='px-4 lg:hidden py-2 bg-white rounded-sm shadow-sm'>Filter</button>
      </div>

      <HorizontalCard />
      
    </div>
    </div>
    </>
  )
}

export default ProductList
