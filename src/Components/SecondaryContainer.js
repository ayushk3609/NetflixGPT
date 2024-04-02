import React from 'react'
import MovieList from './MovieList';
import { useSelector } from "react-redux"
import BrowseShimmer from './BrowseShimmer'


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
     movies && <div className=' w-full bg-black'>
      {!movies.popularMovies?<BrowseShimmer />:
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>}
    </div>
  )
}

export default SecondaryContainer;