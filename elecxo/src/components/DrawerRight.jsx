import React, { useEffect } from "react";
import { Drawer, Typography, IconButton, Button } from "@material-tailwind/react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart ,cartTotal } = useCart();
  console.log(cartTotal().toFixed(2),'cart total');
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is enabled when unmounted
    };
  }, [isOpen]);

  return (
    <Drawer
      size={390} 
      placement="right"
      open={isOpen}
      onClose={onClose}
      className="py-4 px-3 h-full overflow-auto"
      overlay={false}
    >
      <div className="mb-2 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Shopping Cart
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconButton>
      </div>

      <div className="p-4 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="bg-gray-50 px-2 py-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <img width={90} height={110} src={item.image} alt={item.name} className="rounded-lg" />
                <div>
                  <p className="line-clamp-2 text-lg">{item.name}</p>
                  <p className="text-lg font-bold">Rs. {item.rate}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 bg-gray-200 rounded-full text-lg font-bold"
                  >
                    -
                  </button>
                  <p className=" py-1 text-lg">{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 bg-gray-200 rounded-full text-lg font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="flex justify-between px-4 mt-4">
          <Button size="sm" variant="outlined" onClick={onClose}>
            Continue Shopping
          </Button>
          <Button size="sm"> <Link to={'/checkout'}>Checkout</Link> </Button>
        </div>
      )}
    </Drawer>
  );
}

export default CartDrawer;
