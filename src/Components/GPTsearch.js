import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/Constant'


const GPTsearch = () => {
  return (
    <>
      <div className='fixed -z-10' >
        <img className='min-h-screen bg-cover bg-fixed bg-center bg-no-repeat' src={BG_URL} alt="Background" />
      </div>
      <div className="">
        <GPTSearchBar />
      </div>
    </>
  )
}

export default GPTsearch