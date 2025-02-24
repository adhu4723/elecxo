import React from "react";
import { Drawer, Typography, IconButton, Button } from "@material-tailwind/react";

function CartDrawer({ isOpen, onClose }) {
  return (
    <Drawer placement="right" open={isOpen} onClose={onClose} className="p-4" overlay={false} >
      <div className="mb-6 flex items-center justify-between">
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
      <Typography color="gray" className="mb-8 pr-4 font-normal">
        Your cart is currently empty.
      </Typography>
      <div className="flex gap-2">
        <Button size="sm" variant="outlined">
          Continue Shopping
        </Button>
        <Button size="sm">Checkout</Button>
      </div>
    </Drawer>
  );
}

export default CartDrawer;
