import React, { useState } from 'react'
import errorImg from '../Assets/error.png'
import { Link } from 'react-router-dom'
import GPTsearch from './GPTsearch'

const Error = ({ msg }) => {
    const [close, setClose] = useState(true)
    const handleClose = () => {
        setClose(false)
    }

    const errorLog = {
        "Error: [GoogleGenerativeAI Error]: Text not available. Response was blocked due to SAFETY": "Safety Issues inappropriate Words",
        "Error: [GoogleGenerativeAI Error]: Candidate was blocked due to SAFETY":"Error Loading Content",
        "503":"AI Model Overloaded",
        "Error: [500 ] An internal error has occurred.":"Internal Error"
    }

    const message = errorLog[msg]
    return (
        <>
            { (close) ? <div className='flex flex-col pt-12 justify-center items-center'>

                <div className='bg-black bg-opacity-65 py-8 px-2'>
                    <div className='text-white text-end'>
                        <Link onClick={handleClose} className='hover:text-gray-400' to="/browse"><span>Get back to Search </span><i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className='px-16 '>
                        <img src={errorImg}
                            width={400}
                            height={400}
                            alt="error-img" />
                    </div>
                    <div className='px-20 text-center'>
                        <p className="text-white text-2xl break-words ">{message}</p>
                    </div>
                </div>

            </div>: <div>
                <GPTsearch/>
            </div>}
        </>
    )
}

export default Error