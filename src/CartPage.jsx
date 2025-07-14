import React, { useState } from "react";
import CartList from "./CartList";

export default function CartPage() {
  const [cartItems] = useState([
    {
      name: "Black Printed Coffee Mug",
      price: 15,
      quantity: 2,
      image: "https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481",
    },
    {
      name: "Printed Dark Blue T-shirt",
      price: 34,
      quantity: 4,
      image: "https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481",
    },
  ]);

    let subTotal = 0;
    for (let item of cartItems) {
        subTotal += item.price * item.quantity;
    }

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6">
        <CartList cartItems={cartItems} />

        <div className="flex flex-col flex-row justify-between mt-6 gap-3 border-b border-gray-300">
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="border px-3 py-2 rounded w-60"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded w-60">
              APPLY COUPON
            </button>
          </div>
          <button className="bg-red-200 text-white px-4 py-1 rounded cursor-not-allowed w-48 mb-4">
            UPDATE CART
          </button>
        </div>
        <div className="mt-6 max-w-sm ml-auto border rounded-md border-gray-300">
          <h2 className="font-semibold mb-4 bg-gray-50 p-4">Cart totals</h2>
          <div className="flex justify-between border-b py-2 border-gray-300 p-6">
            <span>Subtotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between border-b py-2 border-gray-300 p-6">
            <span>Total</span>
            <span>${subTotal}</span>
          </div>
          <button className="bg-red-500 text-white w-full py-3 mt-4 rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
