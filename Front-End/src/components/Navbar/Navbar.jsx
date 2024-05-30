import React from 'react'
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>

      <div className=' flex justify-between h-[38px] mt-[88px] w-[1170px] mx-auto '>

        <div className='pt-2 flex justify-between w-[675px]'>

          <Link to={'/'}><h1 className='text-black font-inter font-[700] text-[24px] leading-[24px] '>SHOPDOP</h1></Link>

          <div>
            <ul className="flex  justify-center space-x-4">
              <li>
                <Link to="/" className="text-black mr-12 hover:text-gray-300 font-poppins font-[400] text-[16px] leading-[24px] align-center">Home</Link>
              </li>

              <li>
                <Link to="/contact" className="text-black mr-12 hover:text-gray-300">Contact</Link>
              </li>
              <li>
                <Link to="/about" className="text-black mr-12 hover:text-gray-300 ">About</Link>
              </li>
              <li>
                <Link to="/signup" className="text-black mr-12 hover:text-gray-300 flex font-poppins font-[400] text-[16px] leading-[24px] align-center ">SignUp</Link>
              </li>
            </ul>
          </div>

        </div>




        <div className="flex items-center justify-between gap-[24px] w-[347px] h-[38px] ">

          <div className='flex bg-gray-200 w-[243px] mr-[20px]  h-[38px] gap-[10px] pl-[7px] pt-[12px] pr-[7px] pb-[20px] rounded'>

            <input
              type="search"
              name="search"
              placeholder="What are you looking for?"
              className="text-[12px]  w-[80%] font-[400] leading-[18px] pb-[7px] pt-[7px]  pl-[10px] bg-gray-200 "

            />
            <div className='w-[24px] h-[24px]'>
              <CiSearch />
            </div>

          </div>
          <div className='w-[80] h-[32] ml-[10px] flex gap-[16px]' >
            <span className="text-black hover:text-gray-300">
              <CiHeart size={30} />
            </span>
            <span className="text-black  hover:text-gray-300">
              <IoCartOutline size={30} />
            </span>
          </div>
        </div>




      </div>

    </>

  );
}



export default Navbar
