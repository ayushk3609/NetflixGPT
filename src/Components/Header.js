import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/Firebase';
import React,{useState,useEffect} from 'react'
import "../index.css"
import { LOGO, AVATAR } from '../utils/Constant';
import DropdownProfile from './DropdownProfile';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);
  const [openProfile,setOPenProfile] = useState(false);

  const handleDropdownOpen = () => {
    setOPenProfile(true);
  }

  const handleDropdownClose = () =>{
    setOPenProfile(false);
  }

  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if(user){
        const {uid,email,displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate('/browse')
      }else{
        //user is logged out
        dispatch(removeUser());
        navigate('/')
       

      }
    })
    //Unsubscribe when component unmounts
    return () => unsubscribe
  },[])
  
  return (
    <>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between z-10 '>
        <img className='w-40' src={LOGO}
          alt="logo" />

         {user && <div onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}  className='flex my-5 profile'>
          <img  className='size-8 mr-2 cursor-pointer' src={AVATAR}
            alt="user-logo" />
          <button  className='btn-profile'>&#9660;</button>
            {openProfile && <DropdownProfile  /> } 
        </div>}
      </div>
    </>
  )
}

export default Header;