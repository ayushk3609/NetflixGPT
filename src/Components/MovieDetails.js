import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useSearchMovieTrailer from '../Hooks/useSearchMovieTrailer'
import { API_OPTIONS } from '../utils/Constant'
import MovieInfo from './MovieInfo'



const MovieDetails = () => {
  const { movieId } = useParams()
  useSearchMovieTrailer(movieId)
  const trailerVideo = useSelector(store => store.movies?.clickTrailerVideo)
  const [movieDetail, setMovieDetail] = useState(null)

  const getMoviesInfo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId, API_OPTIONS)
    const json = await data.json()
    setMovieDetail(json)
  }

  useEffect(() => {
    getMoviesInfo()
  }, [])



  return (

    <div className='absolute flex justify-center items-center text-teal-50 h-full'>
      <div className=' fixed top-32 md:top-10 left-[15%] md:left-[32%]  justify-center items-center z-50 w-[340px] h-[360px] md:w-[500px] md:h-[500px] rounded-md bg-slate-900'>
       <MovieInfo detail={movieDetail} video={trailerVideo}/>
      </div>
    </div>

  )
}

export default MovieDetails;

