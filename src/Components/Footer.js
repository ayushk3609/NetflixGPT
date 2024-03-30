import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full px-0 md:px-20 pt-20 bg-black text-white'>
        <div className='social px-4 md:px-16'>
            <div className='grid grid-cols-4 md:grid-cols-12 px-32 text-2xl'>
                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                <Link><i className="fa-brands fa-instagram"></i></Link>
                <Link><i className="fa-brands fa-twitter"></i></Link>
                <Link><i className="fa-brands fa-youtube"></i></Link>
            </div>
        </div>
        <div className='content ml-8 md:ml-40 grid grid-cols-2 md:grid-cols-4 text-gray-500 pt-6 text-sm'>
            <div>
                <ul>
                    <li className='py-2 hover:underline cursor-pointer'>Audio Description</li>
                    <li className="py-2 hover:underline cursor-pointer">Investor relations</li>
                    <li className="py-2 hover:underline cursor-pointer">Legal Notices</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="py-2 hover:underline cursor-pointer">Help Center</li>
                    <li className="py-2 hover:underline cursor-pointer">Jobs</li>
                    <li className="py-2 hover:underline cursor-pointer">Cookie Preferences</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="py-2 hover:underline cursor-pointer">Gift Cards</li>
                    <li className="py-2 hover:underline cursor-pointer">Terms of Use</li>
                    <li className="py-2 hover:underline cursor-pointer">Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="py-2 hover:underline cursor-pointer">Media Center</li>
                    <li className="py-2 hover:underline cursor-pointer">Privacy</li>
                    <li className="py-2 hover:underline cursor-pointer">Contact Us</li>
                </ul>
            </div>
        </div>
        <div className='copyright ml-40 pt-6 pb-4 text-gray-500 text-xs'>
            <span>&copy; Netflix, Inc.</span>
        </div>
    </div>
  )
}

export default Footer