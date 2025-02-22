import React, { useState } from 'react'
import { User, ShoppingCart } from 'lucide-react';
import IconBadge from '../components/buttons/IconBadge';
import SearchTab from '../components/SearchTab';

function Navbar() {
    const [search, setSearch] = useState('');

    return (
        <div className='flex justify-center gap-4 items-center py-4 relative'>
            <h1 className='text-blue-500 text-2xl font-bold'>
                Elec<span className='text-black'>xo</span>
            </h1>

            <div className='w-full relative'>
                <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='border border-gray-400 py-3 px-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400' 
                    type="text" 
                    placeholder='Search your items' 
                />
                {/* Positioned SearchTab absolutely below input */}
                {search && (
                    <div className='absolute  left-0 w-full  z-10'>
                        <SearchTab search={search} />
                    </div>
                )}
            </div>

            <div>
                <IconBadge Icon={User} />
            </div>
            <div>
                <IconBadge Icon={ShoppingCart} count={1} />
            </div>
        </div>
    );
}

export default Navbar;
