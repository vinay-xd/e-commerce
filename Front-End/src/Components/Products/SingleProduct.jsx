import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Data/Contex'
import { useParams } from 'react-router-dom'
import * as Images from '../../assets/Images/img'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline, IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";

function SingleProduct() {
    const { Products } = useContext(MyContext)
    const { id } = useParams()
    const singleProduct = Products.find((product) => product.id === parseInt(id))
    console.log(singleProduct);


    const [thumbnail, setthumbnail] = useState(0)
    const handelthumbnail = (index) => {
        setthumbnail(index)
    }
    return (
        <>
            {singleProduct ? (<section>
                <div className='main w-[1170px] mx-auto my-[140px]'>
                    <div className='flex w-[400px] text-[14px] justify-between '>
                        <Link to={'/account'}><button className=' opacity-55'>Account</button></Link>
                        /
                        <button className='opacity-55'> Gaming</button>
                        /
                        <button className=''> {singleProduct.title}</button>
                    </div>
                    <div className='ProductCon flex justify-between mt-[80px]'>

                        <div className='ProductImgCon flex justify-between w-[700px] h-[600px] mx-auto '>
                            <div className='secondaryImg list-none mr-6 '>
                                {singleProduct.imgurl.map((item, index) => (
                                    <li className="w-[170px] h-[auto] bg-[#f5f5f5] mb-4 pt-4" key={index} onClick={() => handelthumbnail(index)}><img className="w-[121px] h-[114px] mx-auto object-contain hover:scale-150 transition-all duration-300 ease-in-out" src={item} alt="" /></li>
                                )
                                )}
                                {/* <li className='w-[170px] h-[140px] bg-[#f5f5f5] mb-4 pt-4'><img className='w-[121px] h-[114px] mx-auto object-contain' src={Images.Gamepad1} alt="" /></li>
                                <li className='w-[170px] h-[140px] bg-[#f5f5f5] mb-4 pt-4'><img className='w-[121px] h-[114px] mx-auto object-contain' src={Images.Gamepad2} alt="" /></li>
                                <li className='w-[170px] h-[140px] bg-[#f5f5f5] mb-4 pt-4'><img className='w-[121px] h-[114px] mx-auto object-contain' src={Images.Gamepad3} alt="" /></li>
                                <li className='w-[170px] h-[140px] bg-[#f5f5f5] mb-4 pt-4'><img className='w-[121px] h-[114px] mx-auto object-contain' src={Images.Gamepad4} alt="" /></li> */}
                            </div>
                            <div className='mainImg flex w-[500px] h-[600px] bg-[#f5f5f5]'>
                                <div className=' w-[446px] h-[315px] m-auto '>
                                    <img className=' w-[100%] h-[100%] object-contain' src={singleProduct.imgurl[thumbnail]} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='ProductDecCon pl-16'>
                            <div className='border-b border-[#0005] pb-6'>
                                <h3 className='text-[24px] font-[600] font-[Inter] mb-2'>{singleProduct.title}</h3>
                                <div className='flex'>
                                    <div className=' flex after:content-["|"] after:mx-3 text-[14px]'>
                                        <p className='flex text-[#ffad33] pt-[2px] mr-2'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></p>
                                        <p>({singleProduct.review})</p>
                                    </div>
                                    <p className='text-[#00ff66] text-[14px]'>In Stock</p>
                                </div>
                                <p className='text-[24px] font-[500] mt-3'>${singleProduct.price}</p>
                                <p className='text-[14px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                            </div>
                            <div className='mt-6'>
                                <div className='flex'>
                                    <p className='text-[20px]'>Colours:</p>
                                    <p className='ml-3 flex pt-[6px]'>
                                        <button className='bg-[#a0bce0] w-[20px] h-[20px] border-[2px] border-[#000] rounded-[50%] mr-2'></button>
                                        <button className='bg-[#e07575] w-[20px] h-[20px] rounded-[50%]'></button></p>
                                </div>

                                <div className='flex mt-6'>
                                    <p className='text-[20px] mr-4 pt-1'>Size:</p>
                                    <button className='border rounded-md p-2 w-10 mr-4'>XS</button>
                                    <button className='border rounded-md p-2 w-10 mr-4'>S</button>
                                    <button className='border rounded-md p-2 w-10 mr-4'>M</button>
                                    <button className='border rounded-md p-2 w-10 mr-4'>L</button>
                                    <button className='border rounded-md p-2 w-10 '>XL</button>
                                </div>
                                <div className='flex mt-6 ' >
                                    <div className='flex border rounded h-[44px] mr-4'>
                                        <button className=' text-[35px] px-4  '>-</button>
                                        <p className='border text-[20px] pt-1 px-6'>2</p>
                                        <button className=' text-[35px] px-4'>+</button>
                                    </div>
                                    <button className='py-2 px-10 rounded bg-[#db4444] text-[#fff] text-[500]'>Buy Now</button>
                                    <div className='py-2 text-[30px] border px-2 rounded ml-5 '><IoIosHeartEmpty /></div>
                                </div>
                            </div>
                            <div className='mt-10 '>
                                <div className='border flex border-[#0005] p-4'>
                                    <div className='text-[40px] pt-2 mr-6'><TbTruckDelivery /></div>
                                    <div>
                                        <h3 className='font-[500] mb-2'>Free Delivery</h3>
                                        <p className='text-[12px] font-[500]'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <div className='border flex  border-[#0005] p-4'>
                                    <div className='text-[40px] pt-2 mr-6'><FaArrowsRotate /></div>
                                    <div>
                                        <h3 className='font-[500] mb-2'>Return Delivery</h3>
                                        <p className='text-[12px] font-[500]'>Free 30 Days Delivery Returns. Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>)

                :

                (<div>
                    <p>Product Not Found</p>
                </div>)}


        </>
    )
}

export default SingleProduct