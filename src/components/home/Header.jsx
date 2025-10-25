import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".stairing", {
      height: 0,
      stagger: {
        amount: -0.5
      }
    });
    tl.from(".stairspad", {
      zIndex: 20,
    });
    tl.from(".menu", {
      y: "-100%"
    });
    tl.from(".link", {
      rotateX: 90,
    })
    tl.to(".stairing", {
      y: "100%",
      display: 'none',
      stagger: {
        amount: -0.5
      }
    });
    tl.to(".stairspad", {
      zIndex: 0,
    });


  }, [openMenu])
  return (
    <>

      <div className='w-full fixed z-10' >
        <div className='w-full flex h-[10vh] items-center justify-between'>
          <Link to={"/"} className='flex items-center pt-5 pl-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" fill="white" height="44" viewBox="0 0 103 44">
              <path fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </Link>
          <button className='flex items-center justify-end bg-black px-[5vw] py-10 cursor-pointer group hover:bg-primary pt-10' onClick={() => setOpenMenu(!openMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-white w-10 group-hover:fill-black"
              transform="matrix(-1,0,0,1,0,0)"
            >
              <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,4z" />
              <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z" />
            </svg>
          </button>
        </div>

        {/* Navbar */}
        {openMenu &&
          <>

            <div className='bg-black h-screen w-full fixed top-0 left-0 overflow-hidden menu z-10'>
              <div className='flex items-center'>
                <Link to={"/"} className='flex items-center pt-5 pl-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="103" fill="white" height="44" viewBox="0 0 103 44">
                    <path fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                  </svg>
                </Link>
                <button onClick={() => setOpenMenu(!openMenu)} className='text-white absolute -top-8 right-5 hover:text-primary font-normal cursor-pointer'><X width={200} strokeWidth={"0.5px"} height={200} /></button>
              </div>
              <div className='w-full h-screen flex flex-col items-center -pt-[30vw] justify-center uppercase'>
                <Link to={"/work"} className='bg-black w-screen h-1/7 border-y-2 flex items-center justify-center hover:border-none border-white text-center group link'>
                  <div className='text-[6vw] uppercase group-hover:hidden'>Work</div>
                  <div className='w-full h-full overflow-hidden text-nowrap bg-primary items-center justify-center hidden group-hover:flex'>
                    <div className='nav-scroll flex items-center justify-center gap-5'>
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                    </div>
                  </div>
                </Link>
                <Link to={"/agency"} className='bg-black w-screen h-1/7 border-y-2 flex items-center justify-center hover:border-none border-white text-center group link'>
                  <div className='text-[6vw] uppercase group-hover:hidden'>Agency</div>
                  <div className='w-full h-full overflow-hidden text-nowrap bg-primary items-center justify-center hidden group-hover:flex'>
                    <div className='nav-scroll flex items-center justify-center gap-5'>
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                    </div>
                  </div>
                </Link>
                <Link to={"/contact"} className='bg-black w-screen h-1/7 border-y-2 flex items-center justify-center hover:border-none border-white text-center group link'>
                  <div className='text-[6vw] uppercase group-hover:hidden'>Contact</div>
                  <div className='w-full h-full overflow-hidden text-nowrap bg-primary items-center justify-center hidden group-hover:flex'>
                    <div className='nav-scroll flex items-center justify-center gap-5'>
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                    </div>
                  </div>
                </Link>
                <Link to={"/blog"} className='bg-black w-screen h-1/7 border-y-2 flex items-center justify-center hover:border-none border-white text-center group link'>
                  <div className='text-[6vw] uppercase group-hover:hidden'>Blog</div>
                  <div className='w-full h-full overflow-hidden text-nowrap bg-primary items-center justify-center hidden group-hover:flex'>
                    <div className='nav-scroll flex items-center justify-center gap-5'>
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/bag on top.jpg" alt="" className='h-[8vw] rounded-full' />
                      <p className='text-[8vw]'>See Everthing</p>
                      <img src="/fingers shaking" alt="" className='h-[8vw] rounded-full' />
                    </div>
                  </div>
                </Link>

              </div>
            </div>
            <div className='w-screen h-screen fixed flex top-0 stairspad'>
              <div className='stairing h-full w-1/5 bg-black '></div>
              <div className='stairing h-full w-1/5 bg-white '></div>
              <div className='stairing h-full w-1/5 bg-black '></div>
              <div className='stairing h-full w-1/5 bg-black '></div>
              <div className='stairing h-full w-1/5 bg-black '></div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Header