import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import TextInput from '../components/inputs/TextInput';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
      const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart ,cartTotal } = useCart();
    
  return (
    <div className="container  mx-auto p-4">
    
 <div className='grid grid-cols-1 lg:grid-cols-2 justify-center  '>
      <div className="mb-6  px-8 py-4 shadow-lg">
        <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Delivery</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Pick up</button>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full name *</label>
            <TextInput type="text" placeholder="Enter full name"  />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email address *</label>
            <TextInput type="email" placeholder="Enter email address"  />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone number *</label>
            <TextInput type="tel" placeholder="Enter phone number"  />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Country *</label>
            <select className="w-full p-2 border-b-2 border-gray-300 rounded">
              <option>Choose state</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <TextInput type="text" placeholder="Enter city" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <TextInput type="text" placeholder="Enter state"  />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code</label>
              <TextInput type="text" placeholder="Enter ZIP code"  />
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I have read and agree to the Terms and Conditions.</span>
            </label>
          </div>
        </form>
      </div>

      <div className="mb-6  px-8 py-4  border-gray-500">
        <h3 className="text-lg font-medium mb-2">Review your cart</h3>
        <div className="space-y-2 h-[250px] overflow-auto px-4 py-2">
  {cartItems && cartItems.length > 0 ? (
    cartItems.map((items) => (
      <div key={items.id} className="flex gap-6 items-center border py-2 px-3 relative ">
        <img width={100} height={100} src={items.image} alt={items.name} />
        <div>
          <span className="font-bold">{items.name}</span> <br />
          <span>QTY: {items.quantity} </span> <br />
          <span>{items.rate}</span>
        </div>
        <button
          onClick={() => removeFromCart(items.id)}
          className="bg-red-600 text-white px-2 py-1 rounded-full absolute -top-3 -right-3"
        >
          <Trash2 />
        </button>
      </div>
    ))
  ) : (
    <div className='flex items-center justify-center flex-col'>
    <img
    width={200}
      src="https://images.vexels.com/media/users/3/192486/isolated/preview/b21f813da2e0c122d2950bf1b449106a-winter-woman-shopping-illustration.png"
      alt="Empty Cart"
    />
    <Link className='bg-blue-700 text-white uppercase px-4 py-2'  to={'/'}>Shop Now</Link>
    </div>
  )}
</div>

        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Discount code</span>
          </label>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Apply</button>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$45.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-$10.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rs {cartTotal()} </span>
          </div>
        </div>
        
      <div className="mb-6">
        <button className="text-lg font-medium mb-2 bg-blue-600 w-full py-3 text-amber-50 uppercase">Pay Now</button>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>Secure Checkout - SSL Encrypted</span>
        </label>
        <p className="text-sm text-gray-600 mt-2">Ensuring your financial and personal details are secure during every transaction.</p>
      </div>
      </div>
      </div>

    </div>
  );
};

export default CheckoutPage;