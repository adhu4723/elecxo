import React from 'react'
import { House, User, ShoppingCart } from 'lucide-react';
import IconBadge from '../components/buttons/IconBadge';

function Navbar() {
    return (
        <>
            <div className='flex justify-center gap-4 items-center  py-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>Elec<span className='text-black'>xo</span></h1>
                
                <div className='w-full '>
                    <input className='border border-gray-400 py-3 px-2 w-full rounded-lg' type="text" placeholder='Search your items' />
                </div>

                <div >
                    <IconBadge Icon={User} />
                </div>
                <div >
                <IconBadge Icon={ShoppingCart} count={1}/>

                </div>

            </div>
        </>
    )
}

export default Navbar
