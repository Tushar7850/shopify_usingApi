import React, {  useEffect, useState } from 'react'
import FilterNavbar from '../FilterNavbar';
import Shopitems from '../../pages/Shopitems';


export default function CategoryNavbar() { 
  
  
  const [products, setproducts] = useState([])

  useEffect(() => {
    fechproduct()
  }, []);

  const fechproduct = async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    setproducts(data)
    
  }
 

  const [selectedItem, setSelectedItem] = useState('');
  const [shopitemData, setShopitemData] = useState(products);

    

  

const UniqueList = [
  ...new Set(
   products.map((CurElem) => {
      return CurElem.category;
    })
  ),
  "All",
];

const FilterItem = (category) => {
  if (category === "All") {
    setShopitemData(products)
    setSelectedItem("All")
    return
  } else {
    const updatedList = products.filter((CurElem) => {
      return CurElem.category === category;
    })
   
    setShopitemData(updatedList);
    setSelectedItem(category)
  }
};




return (
  
 <div className="w-screen " >
 
    <h1 className=" text-4xl lg:text-5xl  font-bold text-center pt-5 text-black drop-shadow-[2px_2px_var(--tw-shadow-color)] lg:drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-zinc-300 ">{shopitemData.category}</h1>
    <FilterNavbar FilterItem={FilterItem}  selectedItem={selectedItem} categoryList={UniqueList}  />


    <Shopitems shopitemData={shopitemData} AllProducts={products}/>
  </div>
  )
}

