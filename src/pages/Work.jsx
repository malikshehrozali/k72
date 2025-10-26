import React from 'react'
import Header from '../components/home/Header'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectCard from '../components/projects/ProjectCard'

const Work = () => {
    const images = [
        {
            image1: "/bag on top.jpg",
            image2: "/man on wheels.jpg"
        },
        {
            image1: "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
            image2: "https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
        },
        {
            image1: "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
            image2: "https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860"
        },
        {
            image1: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
            image2: "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479"
        },
        {
            image1: "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
            image2: "https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f"
        },
        {
            image1: "https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd",
            image2: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14"
        },
        {
            image1: "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
            image2: "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124"
        },
        {
            image1: "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
            image2: "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
        }
    ]
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        const tl = gsap.timeline();
        tl.from(".hero", {
            height: "400px",
            stagger: {
                amount:0.5
            },
            duration: 50,
            scrollTrigger: {
                trigger: ".mainHero",
                markers: true,
                start: "top 100%",
                end: "top -150%",
                scrub: 0.5,
            }
        })
    })
    return (
        <div className=''>
            <div>
                <Header />
            </div>
            <div className=' h-screen w-full'>
                <div className='flex items-center w-full h-[90vh] p-4'>
                    <h2 className='lg:text-[10vw] text-[20vw] font-[font2] relative'>Work<sup className='text-[2vw] absolute top-5 lg:top-25'>16</sup></h2>
                </div>
                <div className='-mt-80 p-4 mainHero'>
                    {
                        images.map((image, index) => (
                            <div className='flex flex-col lg:flex-row w-full items-center mb-2 gap-2 h-[700px] cursor-pointer hero' key={index}>
                                <ProjectCard image1={image.image1} image2={image.image2} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Work