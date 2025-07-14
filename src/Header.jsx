import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white shadow-md flex justify-between">
      <div className="px-16 flex justify-between items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNThMg30NNbdy3GFt9y1bFDqG9t8Pa58Y2A&s" className="w-28 h-20"/>
      </div>
      <div className="px-16 flex justify-between items-center">
        <Link to="/cart">
          <span className="text-2xl">Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
