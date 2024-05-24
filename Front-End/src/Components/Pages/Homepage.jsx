import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
import * as Images from '../../assets/Images/img.js'
import { GoArrowRight } from "react-icons/go";
import { useState } from 'react';
import { useEffect } from 'react';
import { GrPrevious } from "react-icons/gr";
import { FcNext } from "react-icons/fc";
import React, { useContext, useEffect, useState } from 'react'
import * as Images from '../../assets/Images/img.js'
import Card from '../Card/Card.jsx'
import { MyContext } from '../Data/Contex.js'
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosArrowRoundUp } from "react-icons/io";
import BestSCard from '../Card/BestSCard.jsx';
import { Link } from 'react-router-dom'


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

    }}

  const { Products } = useContext(MyContext)
  // console.log(Products);

  const [Slide, setslide] = useState(0);
  const handelProductNext = () => {
    setslide((Slide + 1) % Products.length)
  };
  const handelProductBack = () => {
    setslide((Slide - 1 + Products.length) % Products.length)
  };


  const [bestSelling, setbestSelling] = useState([])
  useEffect(() => {
    setbestSelling(Products.filter((currentdata) => currentdata.BestSelling === true))
  }, [])
  // console.log(bestSelling);


  const [countDown, setcountDown] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })
  const Calculatetime = () => {
    let TargetDate = new Date('2024-06-01T00:00:00')
    const difference = new Date(TargetDate) - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      setcountDown({ days, hours, minutes, seconds })
    } else {
      setcountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [handleNext])

  useEffect(() => {
    const count = setTimeout(() => {
      Calculatetime()
    }, 1000)
    return () => clearTimeout(count)
  }, [countDown]);
  // console.log(countDown);

  const [isVisible, setisVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > 600){
      setisVisible(true)
    }else{
      setisVisible(false)
    }}
  window.addEventListener('scroll', toggleVisible)
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }


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
        {isVisible && (<div className=' fixed bottom-[32px] right-[32px] w-[46px] h-[46px] rounded-[50%] z-50 bg-[#f5f5f5] text-[34px] text-center py-[4px]'>
          <button onClick={scrollToTop} ><IoIosArrowRoundUp /></button>
        </div>)}

      <section className='Best-Selling sec3'>
        <div className='Main w-[1170px] mx-auto my-[140px]'>
          <div className='sec5HCon flex justify-between'>
            <div>
              <p className='font-[600] before:content-[" "] before:bg-[#db4444] before:p-3 before:mr-4 before:rounded-md text-[#db4444]'>This Month</p>
              <h2 className='mt-4 text-[48px] font-[600]'>Best Selling Products</h2>
            </div>
            <div className='  mt-auto'>
              <button className='py-4 px-12 bg-[#db4444] rounded text-[#fff] '>View All</button>
            </div>
          </div>

          <div className='BestSCon mt-[60px] w-[1170px] overflow-hidden'>
            <div className='flex justify-between '>
              {
                bestSelling.map((item, index) => (
                  <>
                  <Link to={`/singleProduct/${bestSelling[index].id}`}>
                    <BestSCard
                      key={item.id}
                      imgurl={item.imgurl}
                      title={item.title}
                      price={item.price}
                      review={item.review}
                      rating={item.rating}

                    />
                </Link>
                  </>
                ))
              }
            </div>

          </div>


        </div>
      </section>

      <section className='Categories sec4'>
        <div className='w-[1170px] h-[500px] mx-auto py-[82px] pr-[60px] relative' style={{ backgroundColor: '#000', backgroundImage: 'radial-gradient(circle at 70% 50%, #444 15%, #000 50%)' }}>
          <div className='w-[568px] h-[330px] ml-auto' style={{ backgroundImage: `url(${Images.JBLspeaker})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className=' absolute top-[64px] bottom-[64px] left-[56px] w-[443px]'>
              <p className='text-[#ffad33] font-[600] mb-7'>Categories</p>
              <h3 className='text-[48px] font-[600] font-[Inter] text-[#fff]'>Enhance Your Music Experience</h3>
              <div className='flex justify-between w-[320px] mt-8 mb-10 text-center'>
                <div className='w-[62px] h-[62px] bg-[#fff] rounded-[50%] text-center pt-5'>
                  <p className='font-[600] leading-3 '>{countDown.days}</p>
                  <p className='text-[12px] '>Days</p>
                </div>
                <div className='w-[62px] h-[62px] bg-[#fff] rounded-[50%] text-center pt-5'>
                  <p className='font-[600] leading-3 '>{countDown.hours}</p>
                  <p className='text-[12px] '>Hours</p>
                </div>
                <div className='w-[62px] h-[62px] bg-[#fff] rounded-[50%] text-center pt-5'>
                  <p className='font-[600] leading-3 '>{countDown.minutes}</p>
                  <p className='text-[12px] '>Minutes</p>
                </div>
                <div className='w-[62px] h-[62px] bg-[#fff] rounded-[50%] text-center pt-5'>
                  <p className='font-[600] leading-3 '>{countDown.seconds}</p>
                  <p className='text-[12px] '>Seconds</p>
                </div>
              </div>
              <button className='py-4 px-12 bg-[#ff5c00] text-[#fff] font'>Buy Now!</button>
            </div>
          </div>

        </div>
      </section>


      <section className='Our-Products sec5 '>
        <div className='Main w-[1170px] mx-auto my-[140px]'>
          <div className='sec5HCon flex justify-between'>
            <div>
              <p className='font-[600] before:content-[" "] before:bg-[#db4444] before:p-3 before:mr-4 before:rounded-md text-[#db4444]'>Our Products</p>
              <h2 className='mt-4 text-[48px] font-[600]'>Explore Our Products</h2>
            </div>
            <div className='w-[100px] h-[46px] mt-auto flex justify-between'>
              <i className='text-[30px] p-[8px] w-[46px] h-[46px] bg-[#f5f5f5] rounded-[50%]' onClick={handelProductBack}><IoIosArrowRoundBack /></i>
              <i className='text-[30px] p-[8px] w-[46px] h-[46px] bg-[#f5f5f5] rounded-[50%]' onClick={handelProductNext}><IoIosArrowRoundForward /></i>
            </div>
          </div>

          <div className='ProductCon mt-[60px] w-[1170px] overflow-hidden h-[732px]'>
            <div className='flex justify-between flex-wrap  '>
              {
                Products.map((_, index) => {
                  const cardIndex = (Slide + index) % Products.length
                  return <>
                    <div className='mb-[60px]' key={cardIndex}>

                      <Link to={`/singleProduct/${Products[cardIndex].id}`}>
                        <Card
                        key={Products[cardIndex].id}
                        imgurl={Products[cardIndex].imgurl[0]}
                        title={Products[cardIndex].title}
                        price={Products[cardIndex].price}
                        review={Products[cardIndex].review}
                        rating={Products[cardIndex].rating}
                      />
                      </Link>
                    </div>
                  </>
                })
              }
            </div>
            <div className='text-center mt-[60px]'>
              <button className='py-4 px-12 bg-[#db4444] text-[#fff] rounded '>View All Products</button>
            </div>

          </div>
        </div>


      </section>




      <section className='Feature sec6 '>
        <div className='Main w-[1170px] mx-auto my-[140px]'>
          <div className='sec6HCon'>

            <p className='font-[600] before:content-[" "] before:bg-[#db4444] before:p-3 before:mr-4 before:rounded-md text-[#db4444]'>Featured</p>
            <h2 className='mt-4 text-[48px] font-[600]'>New Arrival</h2>

          </div>

          <div className='sec6ImgCon mt-[60px] flex justify-between'>
            <div className='w-[570px] h-[600px] pt-[90px] px-8 overflow-hidden rounded' style={{ backgroundSize: 'cover', backgroundColor: '#000' }}>
              <div className='w-[511px] h-[511px] relative' style={{ backgroundImage: `url(${Images.SonyPs5})`, backgroundSize: 'cover' }}>
                <div className='w-[242px] text-[#fff] absolute left-0 bottom-[32px] '>
                  <h3 className='text-[24px] font-[500] font-[Inter] mb-4'>PlayStation 5</h3>
                  <p className='text-[14px] opacity-85'>Black and White version of the PS5 coming out on sale.</p>
                  <button className='font-[500] mt-4 border-b-[2px] border-[#fff5]'>Shop Now</button>
                </div>
              </div>
            </div>

            <div>
              <div className='w-[570px] h-[284px] relative pl-[138px] overflow-hidden rounded' style={{ backgroundSize: 'cover', backgroundColor: '#000' }}>
                <div className='w-[432px] h-[284px]' style={{ backgroundImage: `url(${Images.BlackHat})`, backgroundSize: 'cover' }}>
                  <div className='w-[242px] text-[#fff] absolute left-[24px] bottom-[24px] '>
                    <h3 className='text-[24px] font-[500] font-[Inter] mb-3'>Women’s Collections</h3>
                    <p className='text-[14px] opacity-85'>Featured woman collections that give you another vibe.</p>
                    <button className='font-[500] mt-4 border-b-[2px] border-[#fff5]'>Shop Now</button>
                  </div>
                </div>
              </div>

              <div className='flex justify-between mt-8'>
                <div className='w-[270px] h-[284px] relative p-9 overflow-hidden rounded' style={{ backgroundImage: 'radial-gradient(#444 15%, #111 70%)' }}>
                  <div className='w-[190px] h-[222px]' style={{ backgroundImage: `url(${Images.AlexaSpeaker})`, backgroundSize: 'cover' }}>
                    <div className='w-[242px] text-[#fff] absolute left-[24px] bottom-[24px] '>
                      <h3 className='text-[24px] font-[500]  font-[Inter] '>Speakers</h3>
                      <p className='text-[14px] opacity-85'>Amazon wireless speakers</p>
                      <button className='font-[500] mt-2 border-b-[2px] border-[#fff5]'>Shop Now</button>
                    </div>
                  </div>
                </div>

                <div className='w-[270px] h-[284px] relative p-9 overflow-hidden rounded' style={{ backgroundImage: 'radial-gradient(#444 15%, #111 70%)' }}>
                  <div className='w-[201px] h-[203px]' style={{ backgroundImage: `url(${Images.GucciPerfume})`, backgroundSize: 'cover' }}>
                    <div className='w-[242px] text-[#fff] absolute left-[24px] bottom-[24px] '>
                      <h3 className='text-[24px] font-[500]  font-[Inter] '>Perfume</h3>
                      <p className='text-[14px] opacity-85'>GUCCI INTENSE OUD EDP</p>
                      <button className='font-[500] mt-2 border-b-[2px] border-[#fff5]'>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='trust badges sec7 font-[Poppins]'>
        <div className="w-[943px] mx-auto my-[140px] flex justify-between  ">
          <div>
            <div className="w-[80px] h-[80px] mx-auto rounded-[50%] ">
              <img src={Images.icon5} alt="" />
            </div>
            <div className='text-center mt-6 '>
              <h3 className='text-[20px] font-[600]' >FREE AND FAST DELIVERY</h3>
              <p className='text-[14px] mt-2' >Free delivery for all orders over $140</p>
            </div>
          </div>

          <div>
            <div className="w-[80px] h-[80px] mx-auto rounded-[50%] ">
              <img src={Images.icon6} alt="" />
            </div>
            <div className='text-center mt-6 '>
              <h3 className='text-[20px] font-[600]' >24/7 CUSTOMER SERVICE</h3>
              <p className='text-[14px] mt-2' >Friendly 24/7 customer support</p>
            </div>
          </div>

          <div>
            <div className="w-[80px] h-[80px] mx-auto rounded-[50%] ">
              <img src={Images.icon7} alt="" />
            </div>
            <div className='text-center mt-6 '>
              <h3 className='text-[20px] font-[600]' >MONEY BACK GUARANTEE</h3>
              <p className='text-[14px] mt-2' >We reurn money within 30 days</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Homepage