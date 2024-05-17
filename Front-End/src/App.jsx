import React from 'react'
import './App.css'
<<<<<<< HEAD
import Navbar from './Components/Navbar/Navbar.jsx'
=======
import Navbar from './Components/Navbar/Navbar';
>>>>>>> 66d5412252dd472edf401be4106d1a40c9808027
import Topbar from './Components/Topbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'

function App() {


  return (
    <>

<<<<<<< HEAD
      

=======
     
>>>>>>> 66d5412252dd472edf401be4106d1a40c9808027
      <Router>
      <Topbar />
      <Navbar />
        <Routes>
<<<<<<< HEAD
=======
          {/* <Route path='/' element={<Navbar />} />
          <Route path='/' element={<Topbar />} /> */}
>>>>>>> 66d5412252dd472edf401be4106d1a40c9808027
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </Router>

    </>
  )
}

export default App;
