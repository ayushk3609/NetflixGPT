import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";


const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    const movieTrailer = useSelector( store => store.movies.trailerVideo)
    const getMovieVideos = async() =>{
        const data = await fetch('https://api.trakt.tv/search/imdb/'+movieId+'?extended=full', API_OPTIONS)
        const json = await data.json();
        const trailerKey = (json[0]?.movie && json[0]?.movie?.trailer!==null)?json[0]?.movie?.trailer?.split('=')[1]: 'noKey'
        dispatch(addTrailerVideo(trailerKey))
    };

 useEffect(()=> {
   !movieTrailer && getMovieVideos()
 },[])

}

export default useMovieTrailer;