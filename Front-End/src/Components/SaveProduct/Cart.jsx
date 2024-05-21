import React from 'react'
import * as Images from '../../assets/Images/img.js'
import { IoMdCloseCircle } from "react-icons/io";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function Cart() {


    return (
        <>
            <section>
                <div className='main mt-[96px] w-[1170px] mx-auto my-[200px]'>
                    <div className='flex w-[103px] text-[14px] justify-between '>
                        <button className=' opacity-55'>Home</button>
                        /
                        <button className=''> Cart</button>
                    </div>
                    <div className='AddtoKartCon my-[80px]'>
                        <div className='addtokartList'>
                            <div className='cartList'>
                                <div className='flex justify-between  py-6 px-10 shadow-md rounded mb-10'>
                                    <div className='w-[25%] '>Products</div>
                                    <div className='w-[25%] text-center'>Price</div>
                                    <div className='w-[25%] text-center'>Quantity</div>
                                    <div className='w-[25%] text-end'>Subtotal</div>
                                </div>

                                <div className='flex justify-between  py-6 px-10 shadow-md rounded w-[100%] mb-10'>
                                    <div className='flex w-[25%] text-center '>
                                        <div className=' relative W-[54px] h-[54px]'>
                                            <img className='w-[100%] h-[100%]' src={Images.Monitor} alt="" />
                                            <span className=' absolute text-[18px] text-[#db4444] -top-[10px] -left-[10px] z-10'><IoMdCloseCircle /></span>
                                        </div>
                                        <div className='ml-5'>LCD Monitor</div>
                                    </div>
                                    <div className='w-[25%] text-center'>$650</div>
                                    <div className=' w-[25%]  '>
                                        <div className='flex justify-between mx-auto p-2 w-[72px] border-[1.5px] text-center rounded'>
                                            <p>01</p>
                                            <div className='flex flex-col'>
                                                <button className='text-[14px]'><FaAngleUp /></button>
                                                <button className='text-[14px] '><FaAngleDown /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[25%] text-end '>$650</div>
                                </div>
                                <div className='flex justify-between  py-6 px-10 shadow-md rounded w-[100%] mb-6'>
                                    <div className='flex w-[25%] text-center '>
                                        <div className='W-[54px] h-[54px]'><img className='w-[100%] h-[100%]' src={Images.Gamepad} alt="" /></div>
                                        <div className='ml-5'>H1 Gamepad</div>
                                    </div>
                                    <div className='w-[25%] text-center '>$550</div>
                                    <div className=' w-[25%] '>
                                        <div className='flex justify-between mx-auto p-2 w-[72px] border-[1.5px] rounded'>
                                            <p>02</p>
                                            <div className='flex flex-col'>
                                                <button className='text-[14px] '><FaAngleUp /></button>
                                                <button className='text-[14px]'><FaAngleDown /></button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='w-[25%] text-end '>$1100</div>
                                </div>
                            </div>
                            <div className='cartBtnCon flex justify-between'>
                                <button className='border-[2px] border-[#00000080] rounded px-12 py-4 font-[500]'>Return To Shop</button>
                                <button className='border-[2px] border-[#00000080] rounded px-12 py-4 font-[500]'> Update Cart</button>
                            </div>
                        </div>
                        <div className='addtokartTotal flex justify-between mt-[80px]'>
                            <div className='w-[527px] h-[56px] flex justify-between'>
                                <input className='w-[300px] border-[2px] rounded border-[#00000080] pl-6' type="text" name="" placeholder='Coupon Code' id="" />
                                <button className='px-12 py-4 bg-[#db4444] rounded text-[#fff] font-[500] '>Apply Coupon</button>
                            </div>

                            <div className='w-[470px] h-[324px] border-[2px] rounded border-black py-8 px-6'>
                                <h3 className='text-[20px] mb-6'>Cart Total</h3>
                                <div className='flex justify-between mb-4' >
                                    <div>Subtotal:</div>
                                    <div>$1750</div>
                                </div>
                                <hr className='mb-4 ' />
                                <div className='flex justify-between mb-4'>
                                    <div>Shipping:</div>
                                    <div>Free</div>
                                </div>
                                <hr className='mb-4' />
                                <div className='flex justify-between mb-4 '>
                                    <div>Total:</div>
                                    <div>$1750</div>
                                </div>
                                <div className='w-[260px] mx-auto'>
                                    <button className='px-12 py-4 bg-[#db4444] font-[500] text-[#fff] text-center rounded '>Procees to checkout</button>
                                </div>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart