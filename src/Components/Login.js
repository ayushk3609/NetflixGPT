import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handlebuttonclick = () => {
    // validate form data
    const message = checkValidateData(email.current.value, password.current.value)
    setErrorMessage(message)

    if (message) return; // if something exixts in message
    //otherwise sign in/sign up logic

    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName : name.current.value , photoURL: ""
        }).then(() => {
          //Profile updated
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid: uid, 
              email: email, 
              displayName: displayName}))
        }).catch((error) =>{
          setErrorMessage(error.message);
        })
        // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
          // ..
      });
    }else {
      //sign in
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
        // ..
    });
      
    }
  }



  return (
    <div>
      <Header />
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Background" srcset="" />
      Login

      <form onSubmit={(e) => e.preventDefault()} className='relative mx-auto mt-28 w-3/12 bg-black bg-opacity-80 p-12 text-white rounded-lg' action="">
        <h1 className='font-medium text-4xl py-4'>{(isSignInForm) ? "Sign In" : "Sign Up"}</h1>

        {(!isSignInForm) && <input type="text" ref={name} placeholder='Full Name' className='p-2 bg-gray-700 my-2 w-full rounded-sm' />}

        <input ref={email} type="text" placeholder='Email address' className='p-2 bg-gray-700 my-2 w-full rounded-sm' />
        <input ref={password} type="password" placeholder='Password' className='p-2 bg-gray-700 my-2 w-full rounded-sm' />
        <p className='text-red-500 font-bold text-sm py-2'>{errorMessage}</p>


        <button onClick={handlebuttonclick} className='p-4 my-6 bg-red-700 w-full rounded-sm'>{(isSignInForm) ? "Sign in" : "Sign up"}</button>
        <p className='pointer' onClick={toggleSignInForm}>{(isSignInForm) ? "New to Netflix? Sign up now" : "Already registered? Sign in"}</p>
      </form>
    </div>
  )
}

export default Login