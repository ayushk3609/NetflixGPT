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
    const data = await fetch('https://api.trakt.tv/search/imdb/'+movieId+'?extended=full', API_OPTIONS)
    const json = await data.json()
    setMovieDetail(json[0].movie)
  }

  useEffect(() => {
    getMoviesInfo()
  }, [])



  return (

    <div className='absolute flex text-teal-50 h-full'>
      <div className=' fixed top-52 md:top-16 left-[calc(50%-172px)] md:left-[calc(50%-260px)]  z-50 w-[340px] h-[360px] md:w-[500px] md:h-[500px] rounded-md bg-slate-900'>
       <MovieInfo detail={movieDetail} video={trailerVideo}/>
      </div>
    </div>

  )
}

export default MovieDetails;

