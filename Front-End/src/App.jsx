import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Topbar from './Components/Topbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'

function App() {


  return (
    <>

      

      <Router>
      <Topbar />
      <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
