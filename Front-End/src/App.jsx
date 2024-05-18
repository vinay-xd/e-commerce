import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'
import Wishlist from './Components/SaveProduct/Wishlist.jsx';
import Topbar from './Components/Topbar/Topbar';
import * as Images from '../src/assets/Images/img.js'

function App() {

  const data=[
    {
        id:1,
        imgUrl: Images.Bag
        // description:{}
    },
    {
      id:2,
      imgUrl:Images.Jacket
      // description:{}
  },
  {
    id:3,
    imgUrl:Images.Eye
    // description:{}
},
{
  id:4,
  imgUrl:Images.Game
  // description:{}
},
{
  id:5,
  imgUrl:'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
  // description:{}
},
,
{
  id:1,
  imgUrl: Images.Bag
  // description:{}
},
{
id:2,
imgUrl:'e-commerce\Front-End\src\assets\Images\Bag.png'
// description:{}
},
{
id:3,
imgUrl:'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
// description:{}
},
{
id:4,
imgUrl:'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
// description:{}
},
{
id:5,
imgUrl:'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
// description:{}
}
]
  return (
    <>

     
      <Router>
      <Topbar />
      <Navbar />
       {/* <Wishlist data={data} /> */}
        <Routes>
          /
          {/* <Route path='/' element={<Navbar />} />
          <Route path='/' element={<Topbar />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/wishlist' element={<Wishlist data={data} />}  />
        </Routes>

      </Router>

    </>
  )
}

export default App
