import React from "react";
import ProductListPage from "./ProductListPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails"
import { Route, Routes } from "react-router-dom";

// Default curly braces ke bahar hota h
// Default export ka naam nhi hota import karne wala koi bhi naam de sktea h

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







// const student = {
//   name: 'Suresh',
//   email: 'suresh@gmail.com',
//   age: 99,
//   profile: {
//     aboutMe: 'I love Coding',
//     skills: ['React', 'JavaScript']
//   }
// };

// ... lagane se saare bachi hui keys ussme chali jati h

// const {name, email, age, ...xyz} = student;
 // object destructing


//  dependency -> third party package 
//  dependency manager -> npm (node package mangaer)