import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
import * as Images from '../../assets/Images/img.js'
import { GoArrowRight } from "react-icons/go";
import { useState } from 'react';
import { useEffect } from 'react';
import { GrPrevious } from "react-icons/gr";
import { FcNext } from "react-icons/fc";

import { GoCircle } from "react-icons/go";

function Homepage() {

  const [number, setNumber] = useState(0)

  const images = [
    { id: 1, src: Images.slider1 },
    { id: 2, src: Images.slider2 },
    { id: 3, src: Images.slider3 },
    { id: 4, src: Images.slider4 },
    { id: 5, src: Images.slider5 }
  ];

  const handleNext = () => {
    if (number === images.length - 1) {
      setNumber(0)
    }
    else {
      setNumber(number + 1)
    }
  }

  const handlePrev = () => {
    if (number === 0) {
      setNumber(images.length - 1)
    }
    else {
      setNumber(number - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [handleNext])




  return (
    <>


      <section>

        <div className='flex mx-auto  justify-between w-[1170px] mb-[140px] '>


          <div className='w-[217px] h-[344px] mt-[40px]'>

            <ul>
              <li className='text-base font-normal flex'>Woman’s Fashion
                <div className='w-[24px] h-[24px] ml-[40px]'><RiArrowDropRightLine size={30} /></div>
              </li>
              <li className='mt-[16px] text-base font-normal flex'>Men’s Fashion
                <div className='w-[24px] h-[24px] ml-[60px]'><RiArrowDropRightLine size={30} /></div>
              </li>
              <li className='mt-[16px] text-base font-normal'>Electronics</li>
              <li className='mt-[16px] text-base font-normal'>Home & Lifestyle</li>
              <li className='mt-[16px] text-base font-normal'>Medicine</li>
              <li className='mt-[16px] text-base font-normal'>Sports & Outdoor</li>
              <li className='mt-[16px] text-base font-normal'>Baby’s & Toys</li>
              <li className='mt-[16px] text-base font-normal'>Groceries & Pets</li>
              <li className='mt-[16px] text-base font-normal'>Health & Beauty</li>
            </ul>
          </div>



          <div className="slider mt-[40px] ml-[45px] bg-red-200 relative">

            <div className="number-display">
              <img src={images[number].src} className="img" />
            </div>
            <div className=' absolute bottom-3 left-[45%]'>
              <button className=' hover:bg-red-800 rounded text-white' onClick={handlePrev}><GoCircle size={10} /></button>
              <button className='ml-[6px]  hover:bg-red-800 rounded text-white' onClick={handleNext}><GoCircle size={10} /></button>
              <button className='ml-[6px]  hover:bg-red-800 rounded text-white' onClick={handleNext}><GoCircle size={10} /></button>
              <button className='ml-[6px]  hover:bg-red-800 rounded text-white' onClick={handleNext}><GoCircle size={10} /></button>
              <button className='ml-[6px] hover:bg-red-800 rounded text-white' onClick={handleNext}><GoCircle size={10} /></button>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Homepage;