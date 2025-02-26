import React from 'react';
import { useCart } from '../context/CartContext';

const Card = ({ productData }) => {
  const { addToCart } = useCart();

  return (
    <div className="w- bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
      <img src={productData.image} className="h-38 rounded-xl" alt={productData.name} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold line-clamp-1">{productData?.name || 'Product Name'}</span>
            <p className="text-xs text-gray-700 line-clamp-2">{productData?.description || 'Product Description'}</p>
            <span className="font-bold text-red-600">{productData?.rate || 'Price'}</span>
          </div>
        </div>
        <button
          onClick={() => addToCart(productData)}
          className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
