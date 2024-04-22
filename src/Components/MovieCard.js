import '../index.css'
import { useEffect, useRef, useState } from 'react'
import {  NO_PREVIEW } from '../utils/Constant'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'

const MovieCard = ({ posterpath, id }) => {
  const [click, setClick] = useState(false);
  const newRef = useRef(null)
  const divRef = useRef(null)
  const handleOutsideClick = (e) => {
    //useRef has current to sneek which element is being referred
    if ((newRef.current || divRef.current) && (!newRef.current.contains(e.target) || !divRef.current.contains(e.target))) {
      setClick(false)
    }
  }


  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  })

  const handleClick = () => {
    setClick(true)
  }

  return (
    <>
      <Link to={"/browse/" + id}>
        <div ref={newRef}>
          <div onClick={handleClick} className='w-36 md:w-52 z-30 pr-4 hover:scale-110 transition-all duration-500 ' >
            <img
              className='card h-[210px] md:h-[290px]'
              src={(posterpath === null || posterpath === 'N/A')? NO_PREVIEW : posterpath }
              alt="Movie card" />
          </div>
          <div ref={divRef}>
            {
              click && <MovieDetails />
            }
          </div>
        </div>

      </Link>
    </>
  )
}

export default MovieCard;