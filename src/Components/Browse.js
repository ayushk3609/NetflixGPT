import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GPTsearch from './GPTsearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';




const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div className=''>
      <Header />
      {showGPTSearch ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )
      }

      {/* 
      Main Video Container
       - Video Background
       - Video Title
      Secondary Video Container
       - Movie lists * n
       - card lists * n
      
      */}
    </div>
  )
}

export default Browse;
