import React from 'react'
import './App.css'
import { MyContext } from './Data/Contex.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
