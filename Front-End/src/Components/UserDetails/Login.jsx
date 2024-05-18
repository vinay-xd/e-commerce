import React from 'react'

import * as Images from '../../assets/Images/img.js'

function Login() {
  return (
    <>
      <div className='Login-container w-[1305px] h-[781px] flex justify-between mt-[200px] mx-auto'>
        <div className='LoginImgCon w-[805px] h-[781px]'>
          <img className='w-[100%] h-[100%] object-cover' src={Images.Login} alt="" />
        </div>
        <div className='LoginDetails w-[371px] my-auto leading-6'>
          <div className='mb-12'>
            <h3 className='text-[36px] mb-8 font-[500] tracking-wider'>Log in to Exclusive</h3>
            <p className='text-[16px] '>Enter your details below</p>
          </div>

          <div className=' mb-10'>
            <input className='block border-b-2 pb-2 mb-10 w-[100%]' type="text" name="username" placeholder='Email or Phone Number' />

            <input className='block border-b-2 pb-2 mb-10 w-[100%]' type="text" name="password" placeholder='Password' />
          </div>

          <div className='flex justify-between'>
            <button className=' px-12 py-4 font-[500] text-[#fff] bg-[#db4444]'>Log in</button>
            <p className='py-4 text-[#db4444] '>Forget Password?</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login