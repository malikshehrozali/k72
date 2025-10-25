import React, { Children, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = ({ children }) => {
    const pathName = useLocation().pathname;
    console.log(pathName);

    const stairParentRef = useRef();
    const childRef = useRef();
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: "block"
        })
        tl.from(".stair", {
            height: 0,
            stagger: {
                amount: -0.5
            }
        }),
            tl.to(".stair", {
                y: "100%",
                stagger: {
                    amount: -0.5
                }
            }),
            tl.to(stairParentRef.current, { display: "none" }),
            tl.to(".stair", {
                y: "0%"
            }),
            gsap.from(childRef.current, {
                opacity: 0,
                delay: 1.5,
                scale: 1.2,
            })
    }, [pathName])
    return (
        <div>
            <div className='h-screen fixed w-full z-50 top-0' ref={stairParentRef}>
                <div className='h-full fixed flex w-full'>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                    <div className='stair h-full w-1/5 bg-black '></div>
                </div>
            </div>
            <div ref={childRef}>
                {children}
            </div>
        </div>
    )
}

export default Stair