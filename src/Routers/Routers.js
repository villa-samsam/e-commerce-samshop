import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';




const Routers = () => {
  return (
    <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='home' element={<Shop/>}/>
        <Route path='home' element={<Cart/>}/>
        <Route path='home' element={<ProductDetails/>}/>
        <Route path='home' element={<Checkout/>}/>
        <Route path='home' element={<Login/>}/>
        <Route path='home' element={<Signup/>}/>


    </Routes>



  )
}

export default Routers;