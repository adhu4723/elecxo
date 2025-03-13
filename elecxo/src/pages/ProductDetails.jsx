import React from "react";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import electronicProducts from "../assets/data/product";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = electronicProducts.find((item) => item.id == id);

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} fill="gold" stroke="" />);
    }

    if (halfStar) {
      stars.push(<Star key="half" fill="gold" stroke="" opacity="0.5" />);
    }

    while (stars.length < 5) {
      stars.push(<Star key={stars.length} fill="none" stroke="gold" />);
    }

    return stars;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="space-y-2 px-6">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <span className="flex items-center">
          {renderStars(product.ratings)}
          <p className="ml-2">{product.ratings}</p>
        </span>
        <h1 className="text-3xl">₹{product.rate}</h1>
        <p>{product.description}</p>
        <div className="space-y-4">
          <div className="space-y-2 gap-2">
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-600 text-white w-full px-4 py-2 uppercase"
            >
              Add to cart
            </button>
            <button className="bg-yellow-600 text-white w-full px-4 py-2 uppercase">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
