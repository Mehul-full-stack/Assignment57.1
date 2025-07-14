import React from "react";

export default function CartRow({ item }) {
  const { name, price, quantity, image } = item;

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4 border-b border-gray-300 flex-wrap">
      <div className="flex items-center gap-4 flex-1">
        <button className="text-gray-300 text-xl border rounded-full border-gray-200 px-2 text-center">x</button>
        <img
          src={image}
          className="w-14 h-14 object-cover rounded"
        />
        <span className="pl-2 text-sm font-medium text-red-500">{name}</span>
      </div>
      <div className="text-center w-24">${price}</div>
      <div className="w-24">
        <input
          type="number"
          className="border px-2 py-1 w-full text-center"
          value={quantity}
          readOnly
        />
      </div>
      <div className="text-center w-24">
        ${(price * quantity)}
      </div>
    </div>
  );
}
