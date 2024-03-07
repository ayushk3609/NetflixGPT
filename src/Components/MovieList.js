import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='px-6'>
            <h2 className='text-2xl py-4 text-white'>{title}</h2>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex flex-row'>
                    {movies?.map(movie => <MovieCard key={movie?.id} posterpath={movie?.poster_path} />)}

                </div>
            </div>
        </div>
    )
}

export default MovieList