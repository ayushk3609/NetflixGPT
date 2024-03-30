import React from 'react'
import "../index.css"
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';

function DropdownProfile({userName}) {
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  return (
    <div className='flex flex-col text-white-200 dropdownprofile'>
      <ul className='flex flex-col gap-1 cursor-pointer text-xs'>
        <li className='p-2'>Hi, {userName}</li>
        <li className='p-2'>Manage Profile</li>
        <li className='p-2'>Account</li>
        <li className='p-2'> Help Center</li>
        <li className='border-t border-slate-400 text-center pt-2' onClick={handleSignOut}>Sign out</li>
      </ul>
    </div>
  )
}

export default DropdownProfile