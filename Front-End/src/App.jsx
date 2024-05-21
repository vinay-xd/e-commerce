import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'
import Wishlist from './Components/SaveProduct/Wishlist.jsx';
import Topbar from './Components/Topbar/Topbar';
import * as Images from '../src/assets/Images/img.js'
import Cart from './Components/SaveProduct/Cart.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Error from './Components/error/Error.jsx';
import Footer from './Components/Footer/Footer.jsx';
import About from './Components/Pages/About.jsx';
import { Products, MyContext } from './Components/Data/Contex.js';
import Homepage from './Components/Pages/Homepage.jsx';
import SingleProduct from './Components/Products/SingleProduct.jsx';


function App() {



  console.log(Products);
  return (
    <>

      
    <MyContext.Provider value={{Products}}>
      <Router>
      <Topbar />
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error />} />
          <Route path='/wishlist' element={<Wishlist />}  />
          <Route path='/about' element={<About />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />  

      </Router>
      </MyContext.Provider>

    </>
  )
}

export default App;
