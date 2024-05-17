import React, { useState } from "react"
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
function Footer() {
    return (
        <>
            <div className="w-[100%] py-[80px] h-[440px] bg-black">
                <div className="w-[1180px] h-[276px] mx-auto flex justify-between">
                    <div className="w-[20%] ">
                        <ul className="">
                            <li className=" text-white pb-[12px] font-bold text-2xl">Exclusive</li>
                            <li className=" text-white pb-[12px] text-xl font-medium">Subscribe</li>
                            <li className=" text-white pb-[7px] font-normal text-base">Get 10% off your first order</li>
                            <div className="text-stone-400 w-[217px] h-[48px] rounded border-[1.5px] text-lg pl-[15px] pt-[9px] flex">Enter your email
                                <li className="text-xl text-white pl-[30px] pt-[3px] w-[20px] h-[18px]"><VscSend /></li>
                            </div>
                        </ul>
                    </div>
                    <div className="w-[10%]">
                        <ul>
                            <li className="text-xl font-medium text-white pb-[20px]">Support</li>
                            <li className="font-normal text-base text-white pb-[20px] cursor-pointer"> CYB-I, STPI Cyber Park RIICO Heavy Industrial Area, near Saras Dairy, Jodhpur, Rajasthan 342003, India</li>
                            <li className="font-normal text-base text-white pb-[20px]">bgeditz143@gmail.com</li>
                            <li className="font-normal text-base text-white">+91 7023012244</li>
                        </ul>
                    </div>
                    <div className="w-[20%] pl-[95px]">
                        <ul>
                            <li className="font-medium text-xl text-white pb-[18px]">Account</li>
                            <li className="font-normal text-base text-white pb-[18px]">My Account</li>
                            <li className="font-normal text-base text-white pb-[18px]">Login / Register</li>
                            <li className="font-normal text-base text-white pb-[18px]">Cart</li>
                            <li className="font-normal text-base text-white pb-[18px]">Wishlist</li>
                            <li className="font-normal text-base text-white">Shop</li>
                        </ul>
                    </div>
                    <div className="w-[20%] pl-[50px]">
                        <ul>
                            <li className="font-medium text-xl text-white pb-[18px]">Quick Link</li>
                            <li className="font-normal text-base text-white pb-[18px]">Privacy Police</li>
                            <li className="font-normal text-base text-white pb-[18px]">Terms of use</li>
                            <li className="font-normal text-base text-white pb-[18px]">FAQ</li>
                            <li className="font-normal text-base text-white">Contact</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <ul>
                            <li className="font-medium text-xl text-white pb-[18px]">Download App</li>
                            <li className="font-medium text-sm text-stone-400">Save $3 with App New User Only</li>
                            <div className="w-[198px] h-[84px] gap-[8px]"></div>
                            <div className="w-[80px] h-[80px] rounded text-white"></div>
                            <div className="text-white flex text-xl gap-[30px]  "><RiFacebookLine /><RiTwitterLine /><RiInstagramLine /><RiLinkedinLine /></div>
                        </ul>
                    </div>
                </div>
                <div className=" bg-black border-b-[0.1px] pt-24">

                    <p className=" flex  justify-center text-stone-400 text-current">
                        &copy; Copyright bgeditz 2022. All right reserved Design by bharat goyal UI ®
                    </p>

                </div>

            </div>

        </>
    )
}
export default Footer;