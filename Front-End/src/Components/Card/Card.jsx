import React from 'react'
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

function Card({imgurl, title, price, shopinglist, review, link }) {

  return (
    <>
    <div className='group w-[270px] '>
      <div className='ImgCon relative mb-4 w-[270px] h-[250px] overflow-hidden' style={{backgroundColor: '#f5f5f5'}}>
        <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={imgurl} alt="" />
          <div className=' absolute top-[12px] right-[12px] h-[76px] flex flex-col justify-between text-[20px]'>
            <i className='bg-white rounded-[50%] w-[34px] h-[34px] p-[7px]' ><CiHeart /></i>
            <i className='bg-white rounded-[50%] w-[34px] h-[34px] p-[7px]' ><IoEyeOutline /></i>
          </div>
          <button className='absolute z-50 -bottom-10 bg-[#000] group-hover:bottom-0 transition-all duration-[450ms] ease-in-out text-[#fff] rounded w-[270px] text-center font-[500] p-2' onClick={shopinglist}>Add To Cart</button>
      </div>
      <div className='DecCon'>
      <Link to={`/singleProduct/${link}`}>
        <h3>{title}</h3>
        </Link>
        <div className='flex '>
          <p>${price}</p>
          <p className='flex text-[#ffad33] pt-[2px] mr-2'> < IoIosStar />< IoIosStar />< IoIosStar />< IoIosStar />< IoIosStarOutline/></p>
          <p>{review}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card