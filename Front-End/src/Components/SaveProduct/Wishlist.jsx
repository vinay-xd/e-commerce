import React from 'react'
import * as Images from '../../assets/Images/img.js'
import { IoCartOutline } from "react-icons/io5";
import { MdPanoramaFishEye } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
function Wishlist({ data }) {

    return (
        //card
        <>
            {/* 
            <div className='  w-[1170px] h-[984px] mt-56 ml-[135px] gap-20  '>
                
                <div className='w-[1170px] h-[438px] gap-16  '>
                    <div className='w-[1170px] h-[322px] gap-8 flex '> */}
            <div className="container mx-auto p-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                    {data.map((i) => (

                        <div className='w-[270px] h-[322px] gap-4 mb-[80px] '>

                            <div className='w-[270px] h-[250px] rounded  bg-[#F5F5F5]'>

                                <div className='  w-[55px] h-[26px] mt-3   ml-3  gap-2 rounded pt-[4px] pl-[12px]'>
                                    <p className='font-medium  text-[12px] leading-4  bg-red-300 w-[55px] h-[26px] mt-3    gap-2 rounded pt-[4px] pl-[12px]  pb-[4px] pr-[12px]'>-35%</p>
                                </div>
                                <div className='w-[34px] h-[34px] mt-[1px] mr-3 ml-[224px] gap-2 bg-white rounded-full'>
                                    <div className='w-[16px] h-[18px] mt-1 ml-1 pt-1'>
                                        <RiDeleteBinLine size={25} />
                                    </div>

                                </div>


                                <div className='w-[190px] h-[180px] mb-[14px]  '>
                                    <img src={i.imgUrl} className='w-[178px] h-[129px] mt-[15px] ml-[40px] mr-[40px]' />
                                    <div className='w-[270px] h-[41px] rounded-[0px, 0px, 4px, 4px ] mt-[14px] bg-black flex gap-2' >
                                        <div className='w-[24px] h-[24px] pt-[8px]  ml-[83.5px] '>
                                            <IoCartOutline color='white' size={28} />
                                        </div>
                                        <h4 className='text-white font-normal text-xs leading-4 pt-3 text-center mr-20'>Add To Cart</h4>

                                    </div>
                                </div>

                            </div>


                            <div className='w-[133px] h-[56px] gap-2  mt-4 '>
                                <p className='font-medium text-[16px] leading-6'>Gucci duffle bag</p>
                                <p className='w-[97px] h-[24px] gap-3'>$960  $1160</p>
                            </div>






                        </div>


                    ))}
                    {/* </div>

                </div>
                </div> */}

                </div>
            </div>

            {/* <div className="Container">
{data.map((i) => (
  <Container
  key={i.id}
  imgUrl={i.img}
 
//   description={i.description}
  />
      ))}
      </div> */}
        </>
    )
}

export default Wishlist