import React from 'react'

function HorizontalCard({productData}) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 align-middle  py-4  h-fit bg-white px-4'>
            <div>
                <img className='  h-[250px]  mx-auto' src={productData?.image||''} alt="" />
            </div>
            <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'>{productData?.name||''}</h1>
                <div className='flex gap-2 items-center'>
                <p className='bg-green-600 text-white px-2 py-1 rounded-md w-fit'>4.6</p>

                <h1 className='text-lg  '>{productData?.rate||''}</h1>

                </div>
                <p>{productData?.description||''}</p>
            </div>
            <div className='space-y-4'>
                <div className='space-y-2 gap-2'>
                    <button className='bg-orange-600 text-white w-full px-4 py-2 uppercase'>Add to cart</button>
                    <button className='bg-yellow-600 text-white w-full px-4 py-2 uppercase'>buy now</button>

                </div>
            </div>
        </div>
    )
}

export default HorizontalCard
