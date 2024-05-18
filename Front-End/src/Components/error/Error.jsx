import React from 'react'
import "@fontsource/inter/500.css";
import "@fontsource/poppins/400.css";

function Error() {
    return (
        <>
            <section className='font-[poppins]'>
                <div className="main mt-[96px] w-[1170px] mx-auto my-[200px]">
                    <div className='flex w-[134px] text-[14px] justify-between '>
                        <button className=' opacity-55'>Home</button>
                        /
                        <button >404 Error</button>
                    </div>

                    <div className='errCon mt-[80px] text-center '>

                        <div className='my-auto mb-[80px] '>
                            <h3 className='text-[110px] font-[500] font-[inter] mb-5 '>404 Not Found</h3>
                            <p>Your visited page not found. You may go home page.</p>
                        </div>

                        <div>
                            <button className='py-4 px-12 bg-[#db4444] text-[#fff] font-[500]'>Back to home page</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Error