import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import ProductDetails from "./ProductDetails";
import CartPage from "./CartPage";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:sku" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
