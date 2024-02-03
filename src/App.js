
import {Routes, Route } from 'react-router-dom'

import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import CategoryNavbar from './Components/CategoryNavbar/CategoryNavbar';

function App() {
  return (
    <div >
      <Navbar/>
  
  
         <Routes>
        
        
        <Route path="/" element={<CategoryNavbar/>}/>
        <Route path="/cart" element={<Cart/>}/>


       </Routes>


    </div>
  );
}

export default App;
