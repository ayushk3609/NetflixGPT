import React from 'react'
import '../index.css'

const CircularProgressBar = ({votes}) => {
    const color = votes>75?'#00cc00':'#b3b300'
    const progressStyle = {
        background: `conic-gradient(${color} ${votes*3.6}deg, rgb(100, 116, 139)  0deg)`
    }

    return (
        <div className='px-1 '>
            <div style={progressStyle} className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center circular-progress ">
                <span className="relative text-xs md:text-base text-white">{votes}</span>
            </div>
        </div>
    )
}

export default CircularProgressBar