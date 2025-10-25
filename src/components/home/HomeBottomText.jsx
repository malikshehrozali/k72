import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='flex items-center lg:gap-20 gap-5 font-[font2] justify-center'>
            <Link to={"/work"} className='text-[6vw] hover:border-primary hover:text-primary border-5 border-white px-10 pt-2 leading-[6vw] text-center rounded-full uppercase'>Work</Link>
            <Link to={"/agency"} className='text-[6vw] hover:border-primary hover:text-primary border-5 border-white px-10 pt-2 leading-[6vw] text-center rounded-full uppercase'>Agency</Link>
        </div>
    )
}

export default HomeBottomText