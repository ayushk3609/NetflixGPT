import React, { useEffect, useRef, useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import language from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import "../index.css"
import { API_OPTIONS } from '../utils/Constant';
import { addGeminiMovieResult } from '../utils/gptSlice';
import Loader from './Loader';
import Error from './Error';
import GeminiMovieSuggestion from './GeminiMovieSuggestion';


const GPTSearchBar = () => {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const Gemini_Key = process.env.REACT_APP_GEMINI_KEY;
  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null)
  const genAI = new GoogleGenerativeAI(Gemini_Key);
  const dispatch = useDispatch()

  //search movie in TMDB
  // const searchMovieTMDB = async(movie) => {
  //   const data = await fetch()
  // }

  useEffect(() => {
    dispatch(addGeminiMovieResult({}))
  }, [searchText])

  //Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.trakt.tv/search/movie?query=" + movie ,
      API_OPTIONS
    );
    const json = await data.json();
    const movieIds = json.map(movie => movie.movie.ids['imdb']) //Fetching movie ids from 1st API
        const movieDataWithPoster = await Promise.all(movieIds.map(async id => {
            const posterResponse = await fetch('https://www.omdbapi.com/?apikey='+process.env.REACT_APP_OMDB_API_KEY+'&i='+id)
            const posterData = await posterResponse.json()
            const posterUrl = posterData.Poster
            return {id,posterUrl}
        }))

        //Combining movieData from first API to Poster from second API
        const movieData = json.map(movie => {
            const {posterUrl} = movieDataWithPoster.find(ele => ele.id === movie.movie.ids['imdb'])
            return {...movie.movie,posterUrl}
        })

    return movieData;
  }

  const handleGPTSearchClick = async () => {
    setLoading(true)
    const prompt = "Act as a Movie Recommendation system and suggest movie for the input" +
      searchText.current.value +
      ". only give movies in one line without numbering of top 5 matching results with only comma seperated values like the example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-latest" });

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text()
      const movieContent = text.split(',')
      //for each movie search in TMDB
      const dataPromiseArray = movieContent.map((movie) => {
        return searchMovieTMDB(movie)
      })
      //For each movie we will get a promise
      //so at the end we'll have [Promise,Promise,Promise,Promise,Promise]

      const searchResults = await Promise.all(dataPromiseArray);
      if (searchResults) setLoading(false);
      const filteredResult = searchResults.map(array => array.filter(ele => ele.ids.imdb !==null))

      dispatch(addGeminiMovieResult({ movieNames: movieContent, searchResults: filteredResult }))
    } catch (error) {
      setErr(error)
    }
    // const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });
  }

  return (
    err ? <Error msg={err} /> :
      (loading) ? <Loader /> :
        <div>
          <div className='pt-[35%] md:pt-[15%] flex justify-center'>
            <form className='w-full bg-black md:w-1/2 grid grid-cols-12 ' onSubmit={e => e.preventDefault()}>
              <input ref={searchText} type="text" className='p-2 m-4 col-span-9 text-xs md:text-base focus:outline-none input-shadow' placeholder={language[langKey]?.gptSearchPlaceholder} />
              <button onClick={handleGPTSearchClick} className='py-2 px-4 m-4 col-span-3 bg-red-700 text-center text-xs md:text-base text-white rounded'>{language[langKey]?.search}</button>
            </form>
          </div>
          <div>
            <GeminiMovieSuggestion />
          </div>
        </div>
  )
}

export default GPTSearchBar;