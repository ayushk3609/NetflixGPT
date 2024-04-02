import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    //fetch trailer videos and updates store with trailer video data
    useMovieTrailer(movieId)
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)


  return (
    <div>
        <iframe className='w-full h-full aspect-video' 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?rel=0&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key }
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    </div>
  )
}

export default VideoBackground;


