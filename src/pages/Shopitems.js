import React, { useContext } from "react";
import { CardContext } from "../contextapi/CardContext";



export default function Shopitems({shopitemData,AllProducts}) {

const products = shopitemData.length ===  0 ? AllProducts: shopitemData

  const { handleAddProduct } = useContext(CardContext);


  console.log(products);



  return (
    <div className="p-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
        {products.map((product,i) => (
          <div key={i} className="border-2 h-[20rem] rounded-lg overflow-hidden text-center  border-cyan-500 hover:scale-105  ">
            {/*  */}
            <div className="bg-cyan-200 border-2 border-b-cyan-600 scale-105 -mt-0.5 py-1">
              <h1 className="uppercase">
                <strong>{product.category}</strong>
              </h1>
            </div>
            {/*  */}
            <div className="flex justify-center mt-2 ">
              <img src={product.image} alt="" className="h-28 w-28 " />
            </div>

            <h1 className="text-xs mt-1 h-12 overflow-hidden  px-2">
              {product.title}
            </h1>

            <h4 className=" mt-2 font-medium "> Rs:{product.price}</h4>

            <h4>🌟 {product.rating.rate}</h4>

            <button  
             onClick={() => handleAddProduct(product)}
            className="bg-cyan-500 text-white rounded-lg p-2 mt-1  border-2 border-cyan-600 ">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
}
