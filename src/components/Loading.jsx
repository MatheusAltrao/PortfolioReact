import React from 'react'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Logo from '../assets/logoCyan.svg'




const Loading = ({ setLoading }) => {

  const area = useRef();
  const image = useRef();
  const bar = useRef();
  const content = useRef();
  const barCyan = useRef();


  useLayoutEffect(() => {


    let ctx = gsap.context(() => {

      gsap.to(image.current, { opacity: 1, translateY: 0, delay: 1, duration: 0.5 });
      gsap.to(bar.current, { opacity: 1, delay: 2, duration: 1, });
      gsap.to(barCyan.current, { width: 200, delay: 4, duration: 1, });
      gsap.to(area.current, { width: 0, delay: 7, duration: 0.7, });
      gsap.to(content.current, { opacity: 0, visibility: 'hidden', delay: 6, duration: 0.7, });
    }, image, bar, barCyan);





    return () => {
      ctx.revert();

    };


  }, []);


  return (
    <div ref={area} className='w-full fixed  z-40 top-0 left-0 h-screen bg-black flex items-center justify-center ' >


      <div ref={content} className='   flex items-center justify-center flex-col gap-4 relative' >
        <img ref={image} className=' w-20 h-20 object-cover opacity-0 transition-all duration-200 ease-out  translate-y-[30px] ' src={Logo} alt="logo Matheus" />
        <div ref={bar} className='w-[200px] h-[4px] opacity-0  bg-white/80 rounded-[30px]'>
          <div ref={barCyan} className='w-0 h-full rounded-[30px] bg-[#00B6FF] transition-all ease-in ' ></div>
        </div>
      </div>


    </div>
  )
}

export default Loading
