import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black px-10 py-3 mr-2 rounded hover:bg-opacity-80'>
                <i className="text-2xl mr-2 fa-solid fa-play"></i> <span className='text-lg'>Play</span></button>
            <button className='bg-gray-500 text-white px-10 py-3 bg-opacity-50 rounded'>
            <i className="text-2xl mr-2 fa-solid fa-circle-info"></i><span className='text-lg'>More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle;