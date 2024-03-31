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
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
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
      console.log(text);
      const movieContent = text.split(',')
      //for each movie search in TMDB
      const dataPromiseArray = movieContent.map((movie) => {
        return searchMovieTMDB(movie)
      })
      //For each movie we will get a promise
      //so at the end we'll have [Promise,Promise,Promise,Promise,Promise]

      const tmdbResults = await Promise.all(dataPromiseArray);
      const availableMovies = tmdbResults.map(obj => obj.filter(ele => ele.poster_path!=null))
      if (availableMovies) setLoading(false);

      dispatch(addGeminiMovieResult({ movieNames: movieContent, searchResults: availableMovies }))
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