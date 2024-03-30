import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addTopRatedMovies } from '../utils/moviesSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector( store => store.movies.topRatedMovies)
    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        !topRatedMovies && getTopRated()
    }, [])

}

export default useTopRatedMovies;