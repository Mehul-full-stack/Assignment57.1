import React from "react";
import CartRow from "./CartRow";

export default function CartList({ cartItems }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center font-semibold border-b py-2 px-4 text-sm text-gray-700 bg-gray-50 border-gray-300">
        <div className="flex-1 pl-40">Product</div>
        <div className="w-24 text-center">Price</div>
        <div className="w-24 text-center">Quantity</div>
        <div className="w-24 text-center">Subtotal</div>
      </div>
      {cartItems.map((item) => (
        <CartRow key={item.name} item={item} />
      ))}
    </div>
  );
}
