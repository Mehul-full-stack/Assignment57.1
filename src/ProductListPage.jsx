import React, { useEffect, useState } from "react";
import Product from "./Product";
import productData from "./DummyData";
import { getProductList } from "./api";

export default function ProductList() {

  const [productList, setProductList] = useState([]);

  useEffect(function() {
    const list =  getProductList();
    setProductList(list);
  }, []);

  const [query,setQuery] = useState("");
  const [sort, setSort] = useState("default");

  function handleSortChange(event) {
    setSort(event.target.value);
  } 

  function handleSearchChange(event) {
    setQuery(event.target.value.toLowerCase()); 
  }

  let filteredProducts =  productList.filter(function (product) {
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
          {filteredProducts.map(function(product) {
            return (
              <Product 
                key={product.name}
                {...product}
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