import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    
    <Topbar/>
    
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/' element={<Topbar/>}/>
      </Routes>
      
    </Router>
    
    </>
  )
}

export default App
