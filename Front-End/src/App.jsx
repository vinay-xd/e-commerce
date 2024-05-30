import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/UserDetails/Login.jsx'
import Signup from './Components/UserDetails/Signup.jsx'
import Wishlist from './Components/SaveProduct/Wishlist.jsx';
import Topbar from './Components/Topbar/Topbar';
import * as Images from '../src/assets/Images/img.js'
import Navbar from './Components/Navbar/Navbar.jsx'
import Cart from './Components/SaveProduct/Cart.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Error from './Components/error/Error.jsx';
import Footer from './Components/Footer/Footer.jsx';
import About from './Components/Pages/About.jsx';
import Checkout from './Components/SaveProduct/Checkout.jsx';
import Homepage from './Components/Pages/Homepage.jsx';
import { Products, MyContext } from './Components/Data/Contex.js';
import Homepage from './Components/Pages/Homepage.jsx';
import SingleProduct from './Components/Products/SingleProduct.jsx';


function App() {

  const [addtocart, setaddtocart] = useState([])
  const addtokart = (index) => {
    const productToadd = Products[index] // productToadd is object 
    const itemIndex = addtocart.findIndex(item => item.id === productToadd.id)
    if (itemIndex !== -1) {
      setaddtocart(prdct => //not curly bracket bcoz array become undefine when click twice or when add curly bracket then add return
        prdct.map((item, index) =>
          index === itemIndex && item.count < 10 ? { ...item, count: item.count + 1 } : item
        ))
    } else {
      setaddtocart([...addtocart, { ...productToadd, count: 1 }])
    }
  }
  console.log(addtocart);
  const removefromkart = (id) => {
    setaddtocart(() => addtocart.filter(item => item.id !== id))
  }
  const Increase = (id) => {
    setaddtocart(prdct => prdct.map((item) => id === item.id && item.count < 10 ? { ...item, count: item.count + 1 } : item
    ))
  }
  const Decrease = (id) => {
    setaddtocart(prdct => prdct.map((item) => id === item.id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    ))
  }
  // console.log(addtocart);

  const data = [
    {
      id: 1,
      imgUrl: Images.Bag
      // description:{}
    },
    {
      id: 2,
      imgUrl: Images.Jacket
      // description:{}
    },
    {
      id: 3,
      imgUrl: Images.Eye
      // description:{}
    },
    {
      id: 4,
      imgUrl: Images.Game
      // description:{}
    },
    {
      id: 5,
      imgUrl: 'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
      // description:{}
    },
    ,
    {
      id: 1,
      imgUrl: Images.Bag
      // description:{}
    },
    {
      id: 2,
      imgUrl: 'e-commerce\Front-End\src\assets\Images\Bag.png'
      // description:{}
    },
    {
      id: 3,
      imgUrl: 'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
      // description:{}
    },
    {
      id: 4,
      imgUrl: 'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
      // description:{}
    },
    {
      id: 5,
      imgUrl: 'C:\Users\acer\Desktop\Group\e-commerce\Front-End\src\assets\Images\Bag.png'
      // description:{}
    }
  ]
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        {/* <Wishlist data={data} /> */}


        console.log(Products);
        return (
        <>


          <MyContext.Provider value={{ Products }}>
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
                <Route path='/wishlist' element={<Wishlist data={data} />} />
                <Route path='/about' element={<About />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/' element={<Homepage />} />

                <Route path='/wishlist' element={<Wishlist />} />
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
