import React from 'react'
import Video from '../components/home/Video'
import Header from '../components/home/Header'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='w-full h-screen fixed overflow-hidden'>
        <Video />
      </div>
      <div className=' w-full'><Header /></div>
      <div className='w-full h-screen relative flex flex-col justify-between pb-3'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home