import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] flex items-center justify-center flex-col h-full text-center text-white'>
            <div className='text-[9vw] uppercase leading-[8vw]'>The spark for</div>
            <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>all <div className='h-[10vw] w-[20vw] rounded-full overflow-hidden pb-3'><video src="/bg-video.mp4" autoPlay loop muted className="w-full h-full object-cover"></video></div> things</div>
            <div className='text-[9vw] uppercase leading-[8vw]'>creative</div>
        </div>
    )
}

export default HomeHeroText