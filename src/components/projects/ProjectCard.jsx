import React from 'react'

const ProjectCard = ({ image1, image2 }) => {
    return (
        <>
            <div className='w-1/2 flex items-center justify-center group h-full'>
                <p className='absolute px-15 border-white text-[5vw] border-2 text-white leading-[5vw] font-[font2] rounded-full hidden group-hover:block'>View Project</p>
                <img src={image1} alt="" className='w-full hover:rounded-[50px] object-cover h-full overflow-hidden' />
            </div>
            <div className='w-1/2 flex items-center justify-center group h-full'>
                <p className='absolute px-15 border-white text-[5vw] border-2 text-white leading-[5vw] font-[font2] rounded-full hidden group-hover:block'>View Project</p>
                <img src={image2} alt="" className='w-full hover:rounded-[50px] object-cover h-full overflow-hidden' />
            </div>
        </>
    )
}

export default ProjectCard