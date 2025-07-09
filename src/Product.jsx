
// convention to use props(properties)

// Named Export : export function function_name()
// Default Export : export default Product

// declerative vs imperative 

// React works on declearative approch we write declearative code and react converts it into imperative


import React from "react";
import {Link} from "react-router-dom";

function Product({name, price, category, image}) {
  return (
    <div className="bg-white w-64 p-4">
      <div className="relative">
        <img src={image} className="w-64 h-64 object-cover" />
      </div>
      <p className="text-sm text-gray-500 mt-2">{category}</p>
      <h2 className="text-sm font-semibold">{name}</h2>
      <p className="text-gray-400">${price}</p>
      <Link className="text-gray-400" to="/product-details">View Details</Link>
    </div>
  );
}

export default Product;