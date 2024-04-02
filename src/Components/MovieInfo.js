import React, { useState } from 'react'
import '../index.css'
import Shimmer from './Shimmer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CircularProgressBar from './CircularProgressBar';


const MovieInfo = ({ video, detail }) => {
    const [like, setLike] = useState(false)
    const [copy, setCopy] = useState(false)
    const text = "https://www.youtube.com/watch?v=" + video?.key
    const votes = Math.ceil(detail?.vote_average * 10)
    const time = `${Math.floor(detail?.runtime / 60)} h ${detail?.runtime % 60} min`;
    const handleCopy = async () => {
        await navigator.clipboard.writeText(text)
        setCopy(true)
        setTimeout(() => {
            setCopy(false) 
          }, 2000);


    }

    return (
        (!detail) ? <Shimmer /> :
            <div className=''>

                <iframe className='w-full md:h-[50%] aspect-video'
                    src={"https://www.youtube.com/embed/" + video?.key + "?rel=0&autoplay=1&loop=1&playlist=" + video?.key}
                    title="YouTube video player"
                    allow=" fullscreen; autoplay; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div className='flex justify-between'>
                    <div className='px-2 md:px-4 py-1 w-3/4 '>
                        <h2 className='text-[13px] md:text-xl font-bold'>{detail?.title}</h2>
                        <p className='text-[9px] md:text-xs text-slate-400 pl-0.5 md:pl-2'>{detail?.release_date.split('-').reverse().join('/')} &bull;&nbsp;
                            {detail?.genres.map((ele) => ele.name + ' ')} &bull;&nbsp;
                            {time}
                        </p>
                    </div>
                    <div className='px-2 md:px-4 py-1 md:py-2 w-1/8 md:w-1/4 flex items-start relative justify-between'>
                    {video &&  <CopyToClipboard text={text} onCopy={handleCopy}><button className='text-slate-400 text-[13px] md:text-xl px-2 cursor-pointer'><i class="fa-regular fa-share-from-square"></i></button></CopyToClipboard>}
                        {copy && <div id='copied' className='absolute visible'>
                            <p className='text-xs mt-8'>Copied!</p>
                        </div>}
                        <button onClick={() =>setLike(!like)} className={!like?'text-slate-400 text-[13px] md:text-xl px-2 cursor-pointer':'text-red-600 text-xl px-2 cursor-pointer'}><i class="fa-solid fa-heart"></i></button>
                    </div>

                </div>
                <div className=''>
                    <div className='flex pl-4 py-0.5'>
                        <CircularProgressBar votes={votes} />
                        <h2 className='text-[10px] md:text-sm pl-1 w-4'>User Score</h2>
                        <h4 className='text-xs md:text-sm text-slate-400 pl-12'><i>{detail?.tagline}</i></h4>
                    </div>
                    <div className='pl-4 pr-2 pt-1 '>
                        <h2 className='text-sm md:text-base font-semibold'>Overview</h2>
                        <p className='py-0.5 text-[10px] md:text-sm'>{detail?.overview.split(' ').splice(0,28).join(' ')} ...</p>
                    </div>
                </div>
            </div>
    )
}

export default MovieInfo