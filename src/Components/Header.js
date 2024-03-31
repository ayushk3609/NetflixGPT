import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/Firebase';
import React, { useState, useEffect } from 'react'
import "../index.css"
import { LOGO, AVATAR } from '../utils/Constant';
import DropdownProfile from './DropdownProfile';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/languageConstant';
import language from '../utils/languageConstant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)
  const [openProfile, setOPenProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const langKey = useSelector((store) => store.config.lang)

  const handleGPTSearchClick = () => {
    //toggle GPT Search
    dispatch(toggleGPTSearchView())
    navigate('/browse')

  }

  const handleDropdownOpen = () => {
    setOPenProfile(true);
  }

  const handleDropdownClose = () => {
    setOPenProfile(false);
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        //user is logged out
        dispatch(removeUser());
        navigate('/')


      }
    })
    //Unsubscribe when component unmounts
    return () => unsubscribe
  }, [])

  return (
    <>
      <div className='absolute px-2 py-2 bg-gradient-to-b from-black w-full flex flex-row justify-between z-10'>
        <img className='w-32 md:w-40 mx-0' src={LOGO}
          alt="logo" />

        {user &&
          <div className='flex'>
            {showGPTSearch && 
              <select className='px-0.5 md:px-2 md:my-5 my-3.5 text-xs md:text-sm bg-gray-800 text-white m-2 focus:outline-none input-shadow' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                }
              </select>}
            <button className='px-2 md:px-4 my-3.5 md:my-5 mr-6 bg-purple-800 text-xs md:text-sm text-white rounded'
              onClick={handleGPTSearchClick}
            >{showGPTSearch ? language[langKey]?.homePage : "Intelli search"}</button>
            <div onClick={() => setIsOpen(!isOpen)} className="hamburger md:hidden text-lg my-5 cursor-pointer">
              <Link className="flex font-medium  items-center text-white mr-2 hover:text-gray-400 delay-75 ">
                {(!isOpen) ? <i className="fa-solid fa-bars w-100" ></i> : <i className="fa-solid fa-xmark" ></i>}
              </Link>
            </div>
            <ul className={`md:hidden pb-4 absolute text-center text-white bg-black bg-opacity-65 z-[-1] left-0 w-full transition-all duration-300 ease-in ${isOpen ? 'top-16 ' : 'top-[-490px]'}`}>
              <li className='py-4 cursor-pointer hover:underline'>Hi, {user.displayName}</li>
              <li className='py-4 cursor-pointer hover:underline'>Manage Profile</li>
              <li className='py-4 cursor-pointer hover:underline'>Account</li>
              <li className='py-4 cursor-pointer hover:underline'>Help Center</li>
              <div className=''>
                <li onClick={handleSignOut} className='py-4 cursor-pointer hover:underline'>Sign out</li>
              </div>
            </ul>

            <div onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose} className='hidden  md:flex my-5 profile'>
              <img className='size-8 mr-2 cursor-pointer' src={AVATAR}
                alt="user-logo" />
              <button className='btn-profile'>&#9660;</button>
              {openProfile && <DropdownProfile userName={user.displayName} />}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Header;