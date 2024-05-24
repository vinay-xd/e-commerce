import React from 'react'
import * as Images from '../../assets/Images/img.js'
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";


function Checkout() {
  return (
    <section>

      <div className='flex justify-between w-[1170px] mx-auto'>

        <div className='w-[470px] ' >
          <h3 className='mt-[181px] font-medium text-3xl '>Billing Details</h3>
          <form className='w-[470px]  mt-[48px] '>

            <div className=''>First Name*</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px]  bg-[#F5F5F5]" type="text" name="name" />

            <div className='mt-[32px]'>Company Name</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px]  bg-[#F5F5F5]" type="text" name="name" />

            <div className='mt-[32px]'>Street Address*</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px]  bg-[#F5F5F5]" type="text" name="address" />

            <div className='mt-[32px]'>Apartment, floor, etc. (optional)</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px] bg-[#F5F5F5]" type="text" name="name" />

            <div className='mt-[32px]'>Town/City*</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px]  bg-[#F5F5F5]" type="text" name="name" />

            <div className='mt-[32px]'>Phone Number*</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px]  bg-[#F5F5F5]" type="text" name="number" />

            <div className='mt-[32px]'>Email Address*</div>
            <input className="inputClass flex border border-gray-200 rounded w-[470px] h-[50px] mt-[8px]  bg-[#F5F5F5]" type="text" name="email" />

          </form>
          <i className='mt-[24px]'><IoIosCheckboxOutline /></i>
          
            <p className=' w-[411px] h-[24px] mt-[24px] font-normal text-base flex mb-[140px] ml-[16px]'>Save this information for faster check-out next time</p>
          
        </div>


        <div className='w-[527px] h-[600px] mt-[291px] mb-[322px] '>
          <div className='w-[425px] h-[54px] flex'>
            <img src={Images.Gamepad} alt='' />
            <h3 className='ml-[24px] font-normal text-base'>LCD Monitor</h3>
            <h3 className='ml-[210px] font-normal text-base'>$650</h3>
          </div>

          <div className='w-[422px] h-[54px] flex mt-[32px]'>
            <img src={Images.Monitor} alt='' />
            <h3 className='ml-[24px] font-normal text-base'>H1 Gamepad</h3>
            <h3 className='ml-[210px] font-normal text-base'>$1100</h3>
          </div>

          <div className='w-[422px] h-[136px] mt-[32px]'>
            <div className='w-[422px] h-[40px] flex border-b-2'>
              <h3 className=' font-normal text-base'>Subtotal:</h3>
              <h3 className=' font-normal text-base ml-[307px]'>$1750</h3>
            </div>
            <div className='w-[422px] h-[40px] flex border-b-2 mt-[16px]'>
              <h3 className=' font-normal text-base'>Shipping:</h3>
              <h3 className=' font-normal text-base ml-[319px]'>Free</h3>
            </div>
            <div className='w-[422px] h-[40px] flex border-b-2 mt-[16px]'>
              <h3 className=' font-normal text-base'>Total:</h3>
              <h3 className=' font-normal text-base ml-[330px]'>$1750</h3>
            </div>

            <div className='mt-[32px] w-[427px] h-[28px] flex'>
              <button className='w-[24px] h-[24px] '><IoIosRadioButtonOff size={25} /></button>
              <h3 className='font-normal text-base w-[40px] h-[24px] ml-[16px]'>Bank</h3>
              <div className='flex ml-[155px]'>
                <div>
                  <img src={Images.image1} alt='' />
                </div>
                <div className='ml-[9px]'>
                  <img src={Images.image2} alt='' />
                </div>
                <div className='ml-[9px]' >
                  <img src={Images.image3} alt='' />
                </div>
                <div className='ml-[9px]'>
                  <img src={Images.image4} alt='' />
                </div>
              </div>
            </div>

            <div className='flex mt-[32px]'>
              <button className=''>
                <MdRadioButtonChecked size={25} /></button>
              <h3 className='font-normal text-base ml-[16px]'>Cash on delivery</h3>
            </div>

            <div className='w-[527px] h-[56px] flex mt-[32px]'>
              <input className='w-[300px] h-[56px] rounded border-[1px]' type='text' placeholder='Coupon Code' />
              <button className='text-white bg-[#DB4444] w-[211px] h-[56px] rounded ml-[16px]'>Apply Coupon</button>
            </div>

            <button className='w-[190px] h-[56px] rounded text-white bg-[#DB4444] mt-[32px]'>Place Order</button>


          </div>

        </div>

      </div>
    </section>






  )
}

export default Checkout;
