import React from 'react'
import '../index.css'

const BrowseShimmer = () => {
    const filler = new Array(6).fill(0)
    const fillerRow = new Array(4).fill(0)
    return (
        <div className='w-full h-full bg-black '>

            <div className=' pl-4 md:pl-12 relative z-20'>

                <div className='container pt-20'>
                    <div className='p-5'>
                        <div className='w-full h-[400px] bg-slate-700 shimmer '>

                        </div>
                    </div>
                    {fillerRow.map(ele => <div  className='py-10'>
                        <div className=' grid grid-cols-6 gap-1 p-5'>
                            {filler.map(ele => <div  className=' px-2 w-[180px] h-[240px] bg-slate-700 shimmer '>

                            </div>)}

                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}



export default BrowseShimmer