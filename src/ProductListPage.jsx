import React, { useState } from "react";
import Product from "./Product";

export default function ProductList() {

  const [query,setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const productData = [
    {name:"Black Printed Coffee Mug", price:15.00, category:"Mugs", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
    {name:"Father's Day Coffee Mug", price:19.00, category:"Mugs", image:"data:image/jpeg;base64,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"},
    {name:"Green Printed Tshirt", price:34.00, category:"Tshirts", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
    {name:"Personalised Mug", price:15.00, category:"Mugs", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
    {name:"Printed Brown Tshirt", price:25.00, category:"Tshirts", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
    {name:"Printed Dark Blue Tshirt", price:34.00, category:"Tshirts", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
    {name:"Printed Green Tshirt", price:28.00, category:"Tshirts", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
    {name:"Printed Tshirt Coffee Black Color", price:25.00, category:"Tshirts", image:"https://onesciencenutrition.in/wp-content/uploads/2023/10/WhatsAppImage2023-07-15at3.36.31PM-1.webp"},
    {name:"Typography Teal Printed Tshirt", price:32.00, category:"Tshirts", image:"https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"},
  ];

  function handleSortChange(event) {
    setSort(event.target.value);
  } 

  function handleSearchChange(event) {
    setQuery(event.target.value.toLowerCase()); 
  }

  let filteredProducts =  productData.filter(function (product) {
    return product.name.toLowerCase().indexOf(query) !== -1;
  });

  if(sort == "title") {
    filteredProducts.sort(function(a,b) {
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
    });
  }
  else if(sort == "lowToHigh") {
    filteredProducts.sort(function(a,b) {
      return a.price - b.price;
    });
  }
  else if(sort == "highToLow") {
    filteredProducts.sort(function(a,b) {
      return b.price - a.price;
    });
  }

  return (
    <div className="bg-gray-100">   
      <div className="px-4 py-8">
        <div className="flex justify-between items-center mt-4">
          <input type="text" placeholder="Search products...." className="border px-3 py-1 rounded" onChange={handleSearchChange}/>
          <select className="border px-3 py-1 bg-white" onChange={handleSortChange}>
            <option value="default">Default sorting</option>
            <option value="title">Sort by title</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
        {/* Product Grid */}
        <div className="bg-white m-16 px-4 flex flex-wrap gap-16 justify-center">
          {filteredProducts.map(function(products, index) {
            return (
              <Product 
                key={index}
                name={products.name}
                price={products.price}
                category={products.category}
                image={products.image}
              />
            );
          })}
        </div>
         <div className="flex justify-center space-x-2 mt-10">
          <button className="border px-3 py-1 bg-red-500 text-white">1</button>
          <button className="border px-3 py-1">2</button>
        </div>
      </div>
    </div>
  );
}