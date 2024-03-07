import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

}

export default usePopularMovies;