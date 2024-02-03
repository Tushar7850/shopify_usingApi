import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../contextapi/CardContext'

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";





export default function Navbar() {


  const {cartItems} = useContext(CardContext)

  return (

    <div>
    <nav className='bg-cyan-300 flex justify-between  '>
      <h1 className='text-white font-bold text-4xl p-2'>Shopify</h1>
      <ul className='flex gap-5 justify-center items-center'>
    <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '><Link to="/" >Home</Link></li>
   

   <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '><Link to="/cart" >
          <Badge
                  badgeContent={cartItems.length === 0 ? "" : cartItems.length}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
               

    </Link></li>
  
 
      </ul>
      <button></button>
      
        
    </nav>
   
  
</div>
  )
}
