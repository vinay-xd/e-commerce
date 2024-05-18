import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Topbar from './Components/Topbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'
import Cart from './Components/SaveProduct/Cart.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Error from './Components/error/Error.jsx';

function App() {


  return (
    <>

      

      <Router>
      <Topbar />
      <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error />} />
          
        </Routes>

      </Router>

    </>
  )
}

export default App
