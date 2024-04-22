import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POSTER_URL_OMDB } from "../utils/Constant";
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector( store => store.movies.popularMovies)
    const getPopularMovies = async () => {
        const data = await fetch('https://api.trakt.tv/movies/popular?extended=full', API_OPTIONS)
        const json = await data.json();
        const movieIds = json.map(movie => movie.ids['imdb']) //Fetching movie ids from 1st API
        const movieDataWithPoster = await Promise.all(movieIds.map(async id => {
            const posterResponse = await fetch(POSTER_URL_OMDB + id)
            const posterData = await posterResponse.json()
            const posterUrl = posterData.Poster
            return {id,posterUrl}
        }))

        //Combining movieData from first API to Poster from second API
        const movieData = json.map(movie => {
            const {posterUrl} = movieDataWithPoster.find(ele => ele.id === movie.ids['imdb'])
            return {...movie,posterUrl}
        })
        
        dispatch(addPopularMovies(movieData))
    }

    useEffect(() => {
        !popularMovies && getPopularMovies()
    }, [])

}

export default usePopularMovies;