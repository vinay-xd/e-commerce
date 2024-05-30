import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function AddtoCard({imgurl, title, price, count, totalprice, remove, inc, dec }) {
    return (
        <>
            <div className='flex justify-between  py-6 px-10 shadow-md rounded w-[100%] mb-10 group'>
                <div className='flex w-[25%] text-center '>
                    <div className=' relative W-[54px] h-[54px]'>
                        <img className='w-[100%] h-[100%]' src={imgurl} alt="" />
                        <span className=' absolute opacity-0 text-[18px] text-[#db4444] -top-[10px] -left-[10px] z-10 group-hover:opacity-100 duration-700' onClick={remove}><IoMdCloseCircle /></span>
                    </div>
                    <div className='ml-5'>{title}</div>
                </div>
                <div className='w-[25%] text-center'>${price}</div>
                <div className=' w-[25%]  '>
                    <div className='flex justify-between mx-auto p-2 w-[72px] border-[1.5px] text-center rounded'>
                        <p>{count}</p>
                        <div className='flex flex-col'>
                            <button className='text-[14px]' onClick={inc}><FaAngleUp /></button>
                            <button className='text-[14px] ' onClick={dec}><FaAngleDown /></button>
                        </div>
                    </div>
                </div>
                <div className='w-[25%] text-end '>${totalprice}</div>
            </div>
        </>
    )
}

export default AddtoCard