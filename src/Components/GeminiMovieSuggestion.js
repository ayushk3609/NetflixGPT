import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Footer from './Footer';



const GeminiMovieSuggestion = () => {
  const { searchResults, movieNames } = useSelector((store) => store.gpt)

  if (!movieNames) return null;
  return (
    <div>
      <div className='p-4 m-4 bg-black bg-opacity-65'>
        <div>
          { 
            movieNames.map((name, index) => (
              <MovieList key={name} title={name} movies={searchResults[index]} />
            ))
          }
        </div>
      </div>
      <div className=' w-full'>
        <Footer />
      </div>
    </div>
  )
}



export default GeminiMovieSuggestion