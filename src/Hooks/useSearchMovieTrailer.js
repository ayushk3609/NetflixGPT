import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addClickTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useSearchMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    const getMovieVideos = async() =>{
        const data = await fetch('https://api.trakt.tv/search/imdb/'+movieId+'?extended=full', API_OPTIONS)
        const json = await data.json();
        const trailerKey = (json[0]?.movie && json[0]?.movie?.trailer!==null)?json[0]?.movie?.trailer?.split('=')[1]: 'noKey'
        dispatch(addClickTrailerVideo(trailerKey))
    };

 useEffect(()=> {
    getMovieVideos()
 },[movieId])

}

export default useSearchMovieTrailer;