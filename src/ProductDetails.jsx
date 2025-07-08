import React from "react";

function ProductDetails() {
    return (
        <div className="flex justify-center items-center bg-gray-100 m-6">
            <div className="bg-white p-8 flex gap-10 mb-8">
                <div>
                    <img className="w-80 h-80 object-contain" src="https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481"/>
                </div>
                <div className="max-w-md">
                    <h1 className="text-2xl font-semibold text-gray-600 mb-4">Black Printed Coffee Mug</h1>
                    <p className="text-xl text-gray-700 font-bold mb-4">$15.00</p>
                    <p className="text-gray-500 mb-6">
                        Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                        consectetur adipisci velit, sed quia non incidunt lores ta porro
                        ame. Numquam eius modi tempora incident lores ta porro ame.
                    </p>
                    <div className="flex gap-2 items-center">
                        <input className="w-16 border border-gray-300 px-4 py-2" type="number" defaultValue="1" />
                        <button className="bg-red-500 text-white px-10 py-2 rounded-md font-semibold">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;