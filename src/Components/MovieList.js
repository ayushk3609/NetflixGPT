import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import "../index.css"


const MovieList = ({ title, movies }) => {
    let elementRef = useRef(null)
    const [leftArrowDisable, setLeftArrowDisable] = useState(true)
    const [rightArrowDisable, setRightArrowDisable] = useState(false)
   
    useEffect(() => {
        const element = elementRef.current;

        const handleScroll = () => {
            setLeftArrowDisable(element.scrollLeft === 0);
            setRightArrowDisable(element.scrollLeft + element.clientWidth === element.scrollWidth);
        };

        element.addEventListener('scroll', handleScroll);
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = (direction) => {
        const step = direction === 'left' ? -500 : 500;
        elementRef.current.scrollBy({ left: step, behavior: 'smooth' });
    };

    return (
        <div className='py-4 px-0 md:px-6'>
            <h2 className='text-lg md:text-2xl py-4 text-white'>{title}</h2>

            <div className='flex relative'>
                <div  ref={elementRef} className='flex py-2 overflow-x-scroll overflow-y-hidden no-scrollbar scroll-smooth '>
                    <div className='flex flex-row movieContent '>
                        {  movies?.map(movie => <MovieCard key={movie?.ids['imdb']} id={movie?.ids['imdb']} posterpath={movie?.posterUrl} />)}
                    </div>
                    {!leftArrowDisable && <button onClick={() => handleButtonClick('left')} className='absolute h-[200px] md:h-[300px]  md:pt-0 bg-black bg-opacity-50 text-3xl  md:text-5xl z-50 sideArrow'><b><i className="fa-solid fa-angle-left text-white"></i></b></button>}
                    {!rightArrowDisable && <button onClick={() => handleButtonClick('right')} className='absolute h-[200px] md:h-[300px]  md:pt-0 bg-black bg-opacity-50 right-0 text-3xl md:text-5xl z-50 sideArrow'><b><i className="fa-solid fa-angle-right text-white"></i></b></button>}
                </div>
            </div>
        </div>
    )
}

export default MovieList;