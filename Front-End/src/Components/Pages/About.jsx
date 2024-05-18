import "@fontsource/poppins";
import "@fontsource/inter";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";

import React from 'react'
import * as Images from '../../assets/Images/img.js'

function About() {
  return (
    <>
      <section>
        <div className='w-[1370px] mt-[143px] mx-auto flex justify-between'>

          <div className='w-[525px] my-auto'>
            <h3 className=' font-[inter] font-semibold text-4xl tracking-widest mb-[40px]'>Our Story</h3>
            <p className="font-[poppins] text-base font-normal mb-[24px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className="font-[poppins] text-base font-normal">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>

          <div className='w-[705px] h-[609px] rounded-[4px, 0px, 0px, 4px]'>
            <img className='w-[100%] h-[100%] object-cover' src={Images.AboutHero} alt="" />
          </div>
        </div>
      </section>



      <section>
        <div className="w-[1170px] h-[230px] gap-[30px] mx-auto my-[140px] flex">
          <div className="w-[270px] h-[230px] rounded border-[2px]  ">
            <div className="w-[80px] h-[80px] mt-[20px] ml-[94.5px] font-bold  ">
              <img className="mx-auto" src={Images.icon1} alt="" />
            </div>
            <h3 className="font-[inter] font-bold text-3xl text-center mt-[24px] ">10.5k </h3>
            <p className="text-center mt-[12px]">Sallers active our site</p>
          </div>
          <div className="w-[270px] h-[230px] rounded border-[2px] bg-[#db4444]">
            <div className="w-[80px] h-[80px] mt-[20px] ml-[94.5px] ">
              <img className="mx-auto" src={Images.icon2} alt="" />
            </div>
            <h3 className="font-[inter] font-bold text-3xl text-center mt-[24px]">33k</h3>
            <p className="text-center mt-[12px]">Mopnthly Produduct Sale</p>
          </div>
          <div className="w-[270px] h-[230px] rounded border-[2px]">
            <div className="w-[80px] h-[80px] mt-[20px] ml-[94.5px] ">
              <img className="mx-auto" src={Images.icon3} alt="" />
            </div>
            <h3 className="font-[inter] font-bold text-3xl text-center mt-[24px]">45.5k</h3>
            <p className="text-center mt-[12px]">Customer active in our site</p>
          </div>
          <div className="w-[270px] h-[230px] rounded border-[2px]">
            <div className="w-[80px] h-[80px] mt-[20px] ml-[94.5px] ">
              <img className="mx-auto" src={Images.icon4} alt="" />
            </div>
            <h3 className="font-[inter] font-bold text-3xl text-center mt-[24px]">25k</h3>
            <p className="text-center mt-[12px]">Anual gross sale in our site</p>
          </div>
        </div>
      </section>




      <section>
        <div className="w-[1170px] mt-[140px] mx-auto gap-[30px] flex justify-between">
          <div className="">
            <img src={Images.client2} alt="" />
            <h3 className="mt-[32px] font-[inter] font-medium text-3xl">Tom Cruise</h3>
            <p className="font-[poppins] text-base mt-[8px]">Founder & Chairman</p>
            <div className="flex mt-[16px] gap-[16px] text-2xl"><RiTwitterLine /><RiInstagramLine /><RiLinkedinLine /></div>
          </div>
          <div className="">
            <img src={Images.client3} alt="" />
            <h3 className="mt-[32px] font-[inter] font-medium text-3xl">Emma Watson</h3>
            <p className="font-[poppins] text-base mt-[8px] ">Managing Director</p>
            <div className="flex mt-[16px] gap-[16px] text-2xl"><RiTwitterLine /><RiInstagramLine /><RiLinkedinLine /></div>
          </div>
          <div>
            <img src={Images.client1} alt="" />
            <h3 className="mt-[32px] font-[inter] font-medium text-3xl">Bharat Goyal</h3>
            <p className="font-[poppins] text-base mt-[8px]">Product Designer</p>
            <div className="flex mt-[16px] gap-[16px] text-2xl"><RiTwitterLine /><RiInstagramLine /><RiLinkedinLine /></div>
          </div>
        </div>
      </section>




      <section>
        <div className="w-[943px] h-[161px] mt-[196px] mx-auto flex justify-between mb-[140px]">
          <div className="w-[249px] h-[161px]  ">
            <div className="w-[80px] h-[80px] mx-auto ">
              <img className="mx-auto" src={Images.icon5} alt="" />
            </div>
            <h3 className=" h-[28px] font-[poppins] font-semibold text-xl text-center mt-[24px]">FREE AND FAST DELIVERY</h3>
            <p className=" h-[21px] font-[poppins] text-sm font-normal mt-[8px]">Free delivery for all orders over $140</p>
          </div>

          <div className="w-[249px] h-[161px]">
            <div className="w-[80px] h-[80px] mx-auto">
              <img className="mx-auto" src={Images.icon6} alt="" />
            </div>
            <h3 className=" h-[28px] font-[poppins] font-semibold text-xl text-center mt-[24px]">24/7 CUSTOMER SERVICE</h3>
            <p className=" h-[21px] font-[poppins] text-sm font-normal mt-[8px]">Friendly 24/7 customer support</p>
          </div>

          <div className="w-[249px] h-[161px]">
            <div className="w-[80px] h-[80px] mx-auto">
              <img className="mx-auto" src={Images.icon7} alt="" />
            </div>
            <h3 className=" h-[28px] font-[poppins] font-semibold text-xl text-center mt-[24px]">MONEY BACK GUARANTEE</h3>
            <p className=" h-[21px] font-[poppins] text-sm font-normal mt-[8px]">We reurn money within 30 days</p>
          </div>

        </div>
      </section>


    </>
  )
}

export default About;
