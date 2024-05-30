import React, { useContext } from 'react'
import * as Images from '../../assets/Images/img.js'
import { Link } from 'react-router-dom';


import AddtoCard from '../Card/AddtoCard.jsx';
import { MyContext } from '../Data/Contex.js';

function Cart() {
    const { addtocart, setaddtocard, removefromkart, Increase, Decrease } = useContext(MyContext)
    console.log(addtocart);

    const subtotal = () => {
       return addtocart.reduce((subTamt, item) => subTamt + (item.price * item.count), 0);
    }


    return (
        <>
            {addtocart.length > 0 ?  (<section>
                <div className='main mt-[96px] w-[1170px] mx-auto my-[200px]'>
                    <div className='flex w-[103px] text-[14px] justify-between '>
                        <Link to={'/'}><button className=' opacity-55'>Home</button></Link>
                        /
                        <button className=''> Cart</button>
                    </div>
                    <div className='AddtoKartCon my-[80px]'>
                        <div className='addtokartList'>
                            <div className='cartList'>
                                <div className='flex justify-between  py-6 px-10 shadow-md rounded mb-10'>
                                    <div className='w-[25%] '>Products</div>
                                    <div className='w-[25%] text-center'>Price</div>
                                    <div className='w-[25%] text-center'>Quantity</div>
                                    <div className='w-[25%] text-end'>Subtotal</div>
                                </div>
                                <div>
                                    {
                                        addtocart.map((i) => (
                                            <div key={i.id}>
                                                <AddtoCard
                                                    imgurl={i.imgurl[0]}
                                                    title={i.title}
                                                    price={i.price}
                                                    count={i.count}
                                                    totalprice={i.count * i.price}
                                                    remove={() => removefromkart(i.id)}
                                                    inc={() => Increase(i.id)}
                                                    dec={() => Decrease(i.id)}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>,
                                
                            </div>
                            <div className='cartBtnCon flex justify-between'>
                                <button className='border-[2px] border-[#00000080] rounded px-12 py-4 font-[500]'>Return To Shop</button>
                                <button className='border-[2px] border-[#00000080] rounded px-12 py-4 font-[500]'> Update Cart</button>
                            </div>
                        </div>
                        <div className='addtokartTotal flex justify-between mt-[80px]'>
                            <div className='w-[527px] h-[56px] flex justify-between'>
                                <input className='w-[300px] border-[2px] rounded border-[#00000080] pl-6' type="text" name="" placeholder='Coupon Code' id="" />
                                <button className='px-12 py-4 bg-[#db4444] rounded text-[#fff] font-[500] '>Apply Coupon</button>
                            </div>

                            <div className='w-[470px] h-[324px] border-[2px] rounded border-black py-8 px-6'>
                                <h3 className='text-[20px] mb-6'>Cart Total</h3>
                                <div className='flex justify-between mb-4' >
                                    <div>Subtotal:</div>
                                    <div>${subtotal()}</div>
                                </div>
                                <hr className='mb-4 ' />
                                <div className='flex justify-between mb-4'>
                                    <div>Shipping:</div>
                                    <div>Free</div>
                                </div>
                                <hr className='mb-4' />
                                <div className='flex justify-between mb-4 '>
                                    <div>Total:</div>
                                    <div>${subtotal()}</div>
                                </div>
                                <div className='w-[260px] mx-auto'>
                                    <button className='px-12 py-4 bg-[#db4444] font-[500] text-[#fff] text-center rounded '>Procees to checkout</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>)
        : (
            <div className='cartisEmpty text-center my-[200px]'>
                <h3 className='text-[50px] mb-[25px]'>YOUR CART IS EMPTY</h3>
                <Link to={'/'}><button className='py-4 px-12 bg-[#db4444] text-[#fff] rounded '>HOME</button></Link>
            </div>
        )    
        }
        </>
    )
}

export default Cart