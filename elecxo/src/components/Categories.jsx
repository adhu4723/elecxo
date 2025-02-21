import React from 'react'
import catogary from '../assets/data/catogary'

function Categories() {
  return (
    <div className=' '>
      <h1 className='font-bold text-lg  uppercase'>
        Categories
      </h1>
    <div className='flex gap-14 -mt-4 overflow-x-scroll py-8'>
      {catogary.map(items=>(
        <div className='border relative hover:bg-gray-200  flex gap-6 w-fit px-4 py-2 rounded-lg'>
              <div>{items.name}</div>
              <img className='absolute  -right-14 -top-4' width={75} src={items.image} alt="" />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Categories
