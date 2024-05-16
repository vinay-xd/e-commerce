import React from 'react'
import * as Images from '../../assets/Images/img.js'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <>
    <div className='Login-container w-[1305px] h-[781px] flex justify-between mt-[200px]'>
      <div className='LoginImgCon w-[805px] h-[781px]'>
        <img className='w-[100%] h-[100%] object-cover' src={Images.Login} alt="" />
      </div>
      <div className='LoginDetails w-[371px] my-auto leading-6'>
        <div className='mb-12'>
          <h3 className='text-[36px] mb-8 font-[500] tracking-wider'>Create an account</h3>
          <p className='text-[16px] '>Enter your details below</p>
        </div>

        <div className='mb-10'>
          <input className='block border-b-2 pb-2 mb-10 w-[100%]' type="text" name="name" placeholder='Name' />

          <input className='block border-b-2 pb-2 mb-10 w-[100%]' type="text" name="Email" placeholder='Email or Phone number' />
          
          <input className='block border-b-2 pb-2 mb-10 w-[100%]' type="text" name="password" placeholder='Password' />
        </div>
        <div className=' text-center'>
          <button className='w-[100%] px-12 py-4 mb-4 font-[500] text-[#fff] rounded-[4px] bg-[#db4444]'>Create Account</button>
          <p className='w-[100%] border-2 py-4 rounded-[4px]'><span className='inline-block mr-4 text-[24px]'><FcGoogle /></span>Sign up with Google</p>
          <p className='py-4 '>Already have account? <Link to={'/login'}><span className='font-[500]'>Log in</span></Link></p>
        </div>
        

      </div>
    </div>
  </>

  )
}

export default Signup