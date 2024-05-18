import React from 'react'
import { PiPhone } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import "@fontsource/poppins/400.css";

function Contact() {
    return (
        <>
            <section className='font-[poppins]'>
                <div className='main mt-[96px] w-[1170px] mx-auto my-[200px]'>
                    <div className='flex w-[130px] text-[14px] justify-between '>
                        <button className=' opacity-55'>Home</button>
                        /
                        <button className=''> Contact</button>
                    </div>

                    <div className='contactCon mt-[80px] flex justify-between' >
                        <div className='contAddCon shadow-md rounded w-[340px] py-10 px-8'>
                            <div className='mb-8'>
                                <div className='Icon flex justify-between w-[135px] mb-6 '>
                                    <p className='bg-[#db4444] rounded-[50%] w-[40px] h-[40px] p-[5px] text-[#fff] text-[30px] '><PiPhone /></p>
                                    <p className='py-[6px] font-[500]'>Call To Us</p>
                                </div>
                                <div className='dec text-[14px] leading-8'>
                                    <p >We are available 24/7, 7 days a week.</p>
                                    <p>Phone: +91 7023012244</p>
                                </div>
                            </div >
                            <hr className='' />
                            <div className='mt-8'>
                                <div className='Icon flex justify-between w-[135px] mb-6 '>
                                    <p className='bg-[#db4444] rounded-[50%] w-[40px] h-[40px] p-[7px] text-[#fff] text-[25px] '><MdOutlineMailOutline /></p>
                                    <p className='py-[6px] font-[500]'>Write To US</p>
                                </div>
                                <div className='dec text-[14px] leading-8'>
                                    <p >Fill out our form and we will contact you within 24 hours.</p>
                                    <p>Emails: bgeditz143@gmail.com</p>
                                    <p>Emails: support@exclusive.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='contFormCon w-[800px] py-10 px-8 shadow-md rounded'>
                            <div className='flex justify-between'>
                                <input className='bg-[#f5f5f5] py-3 pl-4' type="text" name="" id="" placeholder='Your Name ' required />
                                <input className='bg-[#f5f5f5] py-3 pl-4' type="text" name="" id="" placeholder='Your Email *' required />
                                <input className='bg-[#f5f5f5] py-3 pl-4' type="text" name="" id="" placeholder='Your Phone *' required />
                            </div>
                            <div className='mt-8'>
                                <textarea className='resize-none py-3 pl-4 bg-[#f5f5f5] w-[100%] h-[207px]' name=""  id="" placeholder='Your Massage'></textarea>
                            </div>
                            <div className='mt-8 text-right'>
                                <button className='py-4 px-12 bg-[#db4444] font-[500] text-[#fff]' >Send Massage</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Contact