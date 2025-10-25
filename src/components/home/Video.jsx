import React from 'react'

const Video = () => {
    return (
        <div className=''>
            <video src="/bg-video.mp4" autoPlay loop muted className="w-full h-screen object-cover">Your Browser does not support the video</video>
        </div>
    )
}

export default Video