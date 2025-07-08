import React from "react";

function Product({name, price, category, image}) {
  return (
    <div className="bg-white w-64 p-4">
      <div className="relative">
        <img src={image} className="w-64 h-64 object-cover" />
      </div>
      <p className="text-sm text-gray-500 mt-2">{category}</p>
      <h2 className="text-sm font-semibold">{name}</h2>
      <p className="text-gray-400">${price}</p>
    </div>
  );
}

export default Product;
