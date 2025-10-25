import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agency = () => {
    gsap.registerPlugin(ScrollTrigger);
    const img = [
        "/Carl",
        "/CAMILLE",
        "/ChantalG.jpg",
        "/Claire",
        "/HugoJoseph",
        "/Isa",
        "/joel",
        "/Lawrence.jpg",
        "/MAXIME",
        "/MEL",
        "/Michele",
        "/MyleneS",
        "/Olivier.jpg",
        "/SophieA",
        "/MEGGIE",
    ]
    const imageDivRef = useRef()
    const imageRef = useRef()
    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: "top 15%",
                end: "top -90%",
                pin: true,
                pinSpacing:true,
                pinReparent: true,
                pinType: "transform",
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let currentIndex;
                    if (elem.progress < 1) {
                        currentIndex = Math.floor(elem.progress * img.length);
                    } else {
                        currentIndex = img.length - 1
                    }

                    imageRef.current.src = img[currentIndex]

                }
            }
        })
    })
    return (
        <div>
            <div className='section1'>
                <div ref={imageDivRef} className='h-[20vw] absolute lg:top-[10vw] top-[30vh] overflow-hidden left-[25vw]  rounded-3xl w-[15vw]'>
                    <img src="/Carl" ref={imageRef} alt="" className='object-cover h-full w-full' />
                </div>
                <div className='relative flex-col flex h-full w-full items-center justify-center'>
                    <p className='text-center text-[20vw] font-[font2] lg:pt-[25vw] pt-[40vh] leading-[18vw]'>SEVEN7Y <br /> TWO</p>
                </div>
                <div className='lg:text-5xl lg:pl-[50%] px-5 font-[font2]'>
                    <p>&emsp;&emsp;&emsp;&emsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                </div>
            </div>
            <div className='h-[60vh] flex items-center justify-center w-full px-[10%] gap-10 text-2xl font-[font1] flex-col lg:flex-row pt-[30vh]'>
                <div className=''><p>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p></div>
                <div className=''><p>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p></div>
                <div className=''><p>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.

                </p></div>
            </div>
        </div>
    )
}

export default Agency