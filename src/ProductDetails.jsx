import React from "react";
import { Link, useParams } from "react-router-dom";
import productData from "./DummyData";

function ProductDetails() {
    // const params = useParams();
    // const sku = params.sku;

    const {sku} = useParams();

    let product;
    for(let i = 0; i < productData.length; i++) {
        const p = productData[i];
        if(sku == p.sku) {
            product = p;
            break;
        }
    }
    return (
        <div className="ml-8">
            <div className="flex justify-center items-center bg-gray-100 m-6">
            <div className="p-8 flex gap-10 mb-8">
                <div>
                    <img className="w-80 h-80 object-contain" src={product.image} />
                </div>
                <div className="max-w-md">
                    <h1 className="text-2xl font-semibold text-gray-600 mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-700 font-bold mb-4">${product.price}</p>
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
        </div>
    );
}

export default ProductDetails;
