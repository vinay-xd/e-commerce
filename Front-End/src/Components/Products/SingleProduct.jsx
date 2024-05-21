import React, { useContext } from 'react'
import { MyContext } from '../Data/Contex'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const { Products } = useContext(MyContext)
    const { id } = useParams()
    const singleProduct = Products.find((product) => product.id === parseInt(id))
    return (
        <>
            {singleProduct ? (<section>
                <div className='main w-[1170px] mx-auto'>
                    <div className='flex w-[130px] text-[14px] justify-between '>
                        <button className=' opacity-55'>Account</button>
                        /
                        <button className='opacity-55'> Gaming</button>
                        /
                        <button className=''> Havic HV G-92 Gamepad</button>
                    </div>
                    <div className='ProductCon '>
                        <div className='ProductImgCon  mx-auto'>
                            <div className='mainImg w-[500px] h-[600px] mt-[80px] bg-[#f5f5f5]'>
                                <div className='w-[446px] h-[315px] ml-[10px] '>
                                    <img className=' w-[100%] h-[100%] object-cover' src={singleProduct.imgurl} alt="" />
                                </div>
                            </div>
                            <div className='secondaryImg'>

                            </div>
                        </div>
                        <div></div>
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