import React from 'react'
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div>
      <nav className="bg-white p-4 flex justify-between items-center h-[38px] pt-[60px] w-[1170px] ml-[135px] ">
        <div className='left'>
          <Link to={'/'}><h1 className='text-black font-inter font-[700] text-[24px] leading-[24px] '>SHOPDOP</h1></Link>
        </div>
        <ul className="flex  justify-center space-x-4">
          <li>
            <Link to="/" className="text-black hover:text-gray-300 gap-[48px] font-poppins font-[400] text-[16px] leading-[24px] align-center">Home</Link>
          </li>
          
          <li>
            <Link to="/contact" className="text-black hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/signup" className="text-black hover:text-gray-300 ">Sign Up</Link>
          </li>
        </ul>



        <div className="flex items-center justify-between ">

          <div className='flex bg-gray-200 w-[243px] rounded-[4px]'>

            <input
              type="search"
              name="search"
              placeholder="What are you looking for?"
              className="text-xs px-5 w-[80%] bg-gray-200 "

            />
            <div className='text-[25px]'>
              <CiSearch />
            </div>
          </div>
        </div>
        <div className='w-[80] h-[32] flex gap-[16px]' >
        <span className="text-black hover:text-gray-300">
          <CiHeart size={30}  />
        </span>
        <span className="text-black  hover:text-gray-300">
          <IoCartOutline size={30}  />
        </span>
        </div>


      </nav>
    </div>

  );
}



export default Navbar
