// ProductCard.js (Component)

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-fil object-center" />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2"><b>Name:</b> {product.title}</h2>
        <p className="text-gray-700"><b>Price:</b> &#x20B9;{product.price}</p>
        <Link
  to={`/products/${product._id}`}
  className="block mt-3 bg-[#f44336] text-white font-semibold py-2 px-4 rounded-sm text-sm text-center hover:bg-white hover:text-[#f44336] border-2 border-[#f44336] transition duration-300"
>
          Open
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
