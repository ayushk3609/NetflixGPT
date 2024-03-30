import React from 'react'
import '../index.css'

const Shimmer = () => {
    return (
        <div className=''>
            <div className='w-full bg-black h-[180px] md:h-[250px] shimmer'>

            </div>
            <div className='w-1/2 ml-4 mt-2 bg-slate-600 h-5 shimmer'>

            </div>
            <div className='flex mt-4 ml-4'>
                <div className='w-[24px] h-[24px] md:w-[48px] md:h-[48px] bg-slate-600'>

                </div>
                <div className='ml-[4px] w-8 h-10 bg-slate-600'>

                </div>
                <div className='ml-16 w-1/2 h-3 md:h-6 bg-slate-600 shimmer'>

                </div>
            </div>
            <div className='mt-4'>
                <div className='ml-4 h-3 md:h-6 w-1/4 bg-slate-600 shimmer'>

                </div>
                <p className='my-1 mx-4 w-3/4 h-6 md:h-12 bg-slate-600 shimmer'>

                </p>
            </div>
        </div>
    )
}

export default Shimmer