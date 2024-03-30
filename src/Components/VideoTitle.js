import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview.split(/[.,]/).slice(0,3).join('.')}</p>
        <div className='my-2 md:m-0'>
            <button className='bg-white text-black py-1 md:py-2 px-3 md:px-9 text-xl rounded hover:bg-opacity-80'>
                <i className="text-2xl mr-2 fa-solid fa-play"></i> <span className='text-lg'>Play</span></button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white py-2 px-9 text-xl rounded hover:bg-opacity-80'>
            <i className="text-2xl mr-2 fa-solid fa-circle-info"></i><span className='text-lg'>More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle;