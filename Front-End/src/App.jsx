import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Topbar from './Components/Topbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'
import Footer from './Components/Footer/Footer.jsx';
import About from './Components/Pages/About.jsx';


function App() {


  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />

      </Router>

    </>
  )
}

export default App;
