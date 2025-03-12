import React, { useState } from 'react';
import { User, ShoppingCart } from 'lucide-react';
import IconBadge from '../components/buttons/IconBadge';
import SearchTab from '../components/SearchTab';
import { Link } from 'react-router-dom';
import CartDrawer from '../components/DrawerRight';
import { useCart } from '../context/CartContext';

function Navbar() {
    const [search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility
    const [isCartOpen, setIsCartOpen] = useState(false); // State to control the drawer
    const {cartItems}=useCart()
    console.log(cartItems.length);
    
    return (
        <>
            <div className='flex justify-center gap-4 sticky top-0 z-20 bg-white items-center py-4 px-4 relative'>
                <h1 className='text-blue-500 text-2xl font-bold'>
                    <Link to={'/'}>
                        Elec<span className='text-black'>xo</span>
                    </Link>
                </h1>

                <div className='w-full relative'>
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setShowDropdown(true); // Show dropdown when typing
                        }}
                        className='border border-gray-400 py-3 px-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        type="text"
                        placeholder='Search your items'
                    />
                    {showDropdown && (
                        <div className='absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-10'>
                            <SearchTab
                                search={search}
                                setSearch={setSearch}
                                setShowDropdown={setShowDropdown} // Pass function to control dropdown
                            />
                        </div>
                    )}
                </div>
                <div className='hidden  lg:flex gap-2'>
                    <Link to={'/login'} className=''>
                        <IconBadge Icon={User} />
                    </Link>
                </div>
                <button onClick={() => setIsCartOpen(true)}>
                    <IconBadge Icon={ShoppingCart} count={cartItems.length} />
                </button>
            </div>
            {/* Render the CartDrawer component and pass the state */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

export default Navbar;
