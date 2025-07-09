import React from "react";
import ProductListPage from "./ProductListPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails"
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
        </Routes>
        <Footer />
      </div>
    );
}
