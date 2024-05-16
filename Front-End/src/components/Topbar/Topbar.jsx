import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
function Topbar() {
  return (
    <>
    <div className='bg-black w-[1440px] h-[48px]'>
        <div className="w-[859px] h-[24px] pt-[12px] ml-[445px] gap-[231px] flex justify-between items-center ">
       < div className='text-white gap-[8px] w-[550px]  h-[24px] flex  '>
        <p className='font-poppins font-[400] text-[14px] leading-[21px] text-#FAFAFA'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
         <a href="ShopNow" className='underline font-poppins font-[600] text-[16px] leading-[24px] align-center'>ShopNow</a>
</div>
<div  className='flex gap-[5px] w-[78px] h-[24px] justify-between items-center'>
<p className='text-white font-poppins font-[400] text-[14px] leading-[21px]   '>English
</p>
<div className='text-[35px]'>

<RiArrowDropDownLine color='white'  />
</div>
</div>


             </div>
        
    </div>
    </>
  )
}

export default Topbar