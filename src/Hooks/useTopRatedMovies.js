import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POSTER_URL_OMDB } from "../utils/Constant";
import { addTopRatedMovies } from '../utils/moviesSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector( store => store.movies.topRatedMovies)
    const getTopRated = async () => {
        const data = await fetch('https://api.trakt.tv/movies/favorited/weekly?extended=full', API_OPTIONS)
        const json = await data.json();
        const movieIds = json.map(movie => movie.movie.ids['imdb']) //Fetching movie ids from 1st API
        const movieDataWithPoster = await Promise.all(movieIds.map(async id => {
            const posterResponse = await fetch( 'https://www.omdbapi.com/?apikey='+process.env.REACT_APP_OMDB_API_KEY+'&i='+id)
            const posterData = await posterResponse.json()
            const posterUrl = posterData.Poster
            return {id,posterUrl}
        }))

        //Combining movieData from first API to Poster from second API
        const movieData = json.map(movie => {
            const {posterUrl} = movieDataWithPoster.find(ele => ele.id === movie.movie.ids['imdb'])
            return {...movie.movie,posterUrl}
        })
        dispatch(addTopRatedMovies(movieData))
    }

    useEffect(() => {
        !topRatedMovies && getTopRated()
    }, [])

}

export default useTopRatedMovies;