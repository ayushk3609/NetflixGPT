import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';




const Browse = () => {

  useNowPlayingMovies()
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
